const { getRocketsData, getRocketDataById } = require('./rockets')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData(),
    getRocketDataById: (root, args) => getRocketDataById(args.rocket_id)
  },
}

module.exports = { resolvers }