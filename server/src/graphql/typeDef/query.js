const { gql } = require('apollo-server')

const query = gql`
    type Query{
        me: User
        getRocket: [Rocket]!
        getRocketDataById(rocket_id: String!): Rocket!
        getMissions: [Mission]!
        getMissionDataById(mission_id: String!): Mission!
    }
`
module.exports = { query }