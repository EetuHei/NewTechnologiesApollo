const { getRocketsData, getRocketDataById } = require('./rockets')
const { getMissionsData, getMissionDataByName } = require('./missions')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData(),
    getRocketDataById: (root, args) => getRocketDataById(args.rocket_id),
    getMissions: () => getMissionsData(),
    getMissionDataByName: (root, args) => getMissionDataByName(args.mission_id)
  },
}

module.exports = { resolvers }