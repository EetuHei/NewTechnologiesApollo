const { query } = require('./query')
const { mutation } = require('./mutation')
const { rocketType, missionType, userType } = require('./types')

const typeDefs = [
  query,
  mutation,
  rocketType,
  missionType,
  userType
]

module.exports = {
  typeDefs,
}