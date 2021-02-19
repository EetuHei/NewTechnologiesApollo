const { gql } = require('apollo-server')

// define what data you can query for rockets
const userType = gql`
type User {
    username: String!
    password: String!
    id: ID!
  }
  type Token {
    value: String!
  }
`

module.exports = { userType, }