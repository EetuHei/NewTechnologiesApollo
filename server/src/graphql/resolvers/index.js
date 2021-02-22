const { getRocketsData, getRocketDataById } = require('./rockets')
const { getMissionsData, getMissionDataById } = require('./missions')
const { createUser, login } = require('./user')

const resolvers = {
  Query: {
    Me: (root, args, context) => {
      return context.currentUser
    },
    getRocket: () => getRocketsData(),
    getRocketDataById: (root, args) => getRocketDataById(args.rocket_id),
    getMissions: () => getMissionsData(),
    getMissionDataById: (root, args) => getMissionDataById(args.mission_id)
  },
  Mutation: {
    createUser: (root, args) => createUser(args),
    login: (root, args) => login(args,)
  }
}

module.exports = { resolvers }