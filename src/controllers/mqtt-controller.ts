import { Context } from '../apollo'

module.exports = ({ services, repositories }: Context) => {
  const { mqtt, pubsub } = services

  mqtt.on('connect', () => {
    mqtt.subscribe('#')
  })

  mqtt.on('message', async function (topic, msg, pkt) {
    if (!topic.includes('turned')) {
      const value = JSON.parse(msg.toString())
      console.log({ topic, value })
      return
    }

    const turned = topic.includes('turnedOn') ? 'ON' : 'OFF'

    const device = turned === 'ON' ? topic.replace('turnedOn', '') : topic.replace('turnedOff', '')

    try {
      await pubsub.publish('SWITCHED', {
        switched: {
          turned,
          device
        }
      })
    } catch (err) {
      console.log(err)
    }
  })
}
