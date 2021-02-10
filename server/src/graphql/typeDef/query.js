const { gql } = require('apollo-server')

const query = gql`
    type Query{
        getRocket: [Rocket]!
        getRocketDataById(rocket_id: String!): Rocket!
        getMissions: [Mission]!
        getMissionDataByName(mission_id: String!): Mission!
    }
`
module.exports = { query }