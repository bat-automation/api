import { RequestHandler, HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { getEmail } from './auth'
import { Services } from '../services'
import { Repositories } from '../repositories'
import { CODES } from '../error'
import { LogAction } from '../generated/graphql'

export function PortaoIntentHandler (services: Services, repositories: Repositories): RequestHandler {
  const { redis } = services
  const { Log, User } = repositories.mongoose.models
  return {
    canHandle (handlerInput: HandlerInput): boolean {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'PortaoIntent'
    },
    async handle (handlerInput: HandlerInput): Promise<Response> {
      if (handlerInput.requestEnvelope.session) {
        if (handlerInput.requestEnvelope.session.user.permissions) {
          try {
            const email = await getEmail(handlerInput.requestEnvelope.session.user.permissions.consentToken)

            const user = await User.findOne({ email }, { favoriteDevice: 1 })
            console.log({ email, user })
            if (!user) throw new Error(CODES.NOT_FOUND)

            const channel = await redis.hget(user.favoriteDevice.toString(), 'channel')
            console.log({ channel })
            if (!channel) throw new Error(CODES.NOT_FOUND)

            const test = await redis.hget(user.favoriteDevice.toString(), user._id.toString())
            console.log({ test })
            if (!test) throw new Error(CODES.UNAUTHORIZED)
            console.log('channel', '/ON' + channel)
            services.mqtt.publish('/ON' + channel, '1')

            Log.log({
              user: user._id,
              device: user.favoriteDevice,
              action: LogAction.AlexaSkill
            })

            setTimeout(() => {
              services.mqtt.publish('/OFF' + channel, '1')
            }, 350)

            return handlerInput.responseBuilder
              .speak('É pra já')
              .withSimpleCard('Hello World', 'É pra já')
              .withShouldEndSession(true)
              .getResponse()
          } catch (err) {
            return handlerInput.responseBuilder
              .speak(err.message)
              .withSimpleCard('Hello World', err.message)
              .withShouldEndSession(true)
              .getResponse()
          }
        }
        return handlerInput.responseBuilder
          .speak('Verifique permissões')
          .withSimpleCard('Hello World', 'Verifique permissões')
          .withShouldEndSession(true)
          .getResponse()
      }
      return handlerInput.responseBuilder
        .speak('Realize o login')
        .withSimpleCard('Hello World', 'Realize o login')
        .withShouldEndSession(true)
        .getResponse()
    }
  }
}
