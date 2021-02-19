const { getRocketsData, getRocketDataById } = require('./rockets')
const { getMissionsData, getMissionDataById } = require('./missions')
const { createUser } = require('./user')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData(),
    getRocketDataById: (root, args) => getRocketDataById(args.rocket_id),
    getMissions: () => getMissionsData(),
    getMissionDataById: (root, args) => getMissionDataById(args.mission_id)
  },
  Mutation: {
    createUser: (root, args) => createUser(args)
  }
}

module.exports = { resolvers }