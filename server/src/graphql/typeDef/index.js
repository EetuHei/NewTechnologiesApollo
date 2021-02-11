const { query } = require('./query')
const { rocketType, missionType } = require('./types')

const typeDefs = [
  query,
  rocketType,
  missionType
]

module.exports = {
  typeDefs,
}