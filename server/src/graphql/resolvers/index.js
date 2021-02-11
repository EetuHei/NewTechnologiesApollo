const { getRocketsData, getRocketDataById } = require('./rockets')
const { getMissionsData, getMissionDataById } = require('./missions')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData(),
    getRocketDataById: (root, args) => getRocketDataById(args.rocket_id),
    getMissions: () => getMissionsData(),
    getMissionDataById: (root, args) => getMissionDataById(args.mission_id)
  },
}

module.exports = { resolvers }