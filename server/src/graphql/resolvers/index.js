const {getRocketsData} = require('./rockets')
const {getMissionsData} = require('./missions')

const resolvers = {
  Query: {
    getRocket: () => getRocketsData(),
    getMissions: () => getMissionsData()
  },
}

module.exports = {resolvers};