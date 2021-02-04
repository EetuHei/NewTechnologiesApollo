const { getRocketsData, getRocketDataById } = require('./rockets')
const { getMissionsData } = require('./missions')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData(),
    getRocketDataById: (root, args) => getRocketDataById(args.rocket_id),
    getMissions: () => getMissionsData()
  },
}

module.exports = { resolvers }