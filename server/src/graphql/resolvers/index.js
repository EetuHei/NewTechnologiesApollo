const {getRocketsData} = require('./rockets')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData()
  },
}

module.exports = {resolvers};