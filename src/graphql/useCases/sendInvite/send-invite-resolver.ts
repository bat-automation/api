import { Context } from '../../../apollo'
import { SendInviteInput } from '../../../generated/graphql'
import { CODES } from '../../../error'

interface SendInviteInputA {
  input: SendInviteInput;
}

exports.resolver = {
  Mutation: {
    sendInvite: async (_, { input }: SendInviteInputA, { repositories, user }: Context) => {
      const { device, email } = input
      const { Device, User } = repositories.mongoose.models

      const dev = await Device.findOne({ _id: device, owner: user }, { _id: 1 })

      if (!dev) throw new Error(CODES.UNAUTHORIZED)

      try {
        const user = await User.findOne({ email }, { _id: 1, devicesInvited: 1 })
        if (!user) {
          await Device.updateOne({ _id: device }, { $addToSet: { pendingInvites: email } })
        } else {
          await Device.updateOne({ _id: device }, { $addToSet: { usersInvited: user._id } })
          await User.updateOne({ _id: user._id }, { $addToSet: { devicesInvited: device } })
        }
        return { success: true }
      } catch (err) {
        console.log(err)
        return {
          success: false
        }
      }
    }
  }
}
