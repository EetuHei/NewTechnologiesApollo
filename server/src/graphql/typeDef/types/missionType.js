const { gql } = require('apollo-server')

// define what data you can query for missions
const missionType = gql`
  type Mission{
        id: Int
        mission_name: String
        mission_id: String
        manufacturers: [String]
        payload_ids: [String]
        wikipedia: String
        website: String
        twitter: String
        description: String
      }
`
module.exports = { missionType, }