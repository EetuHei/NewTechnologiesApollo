const { gql } = require('apollo-server')

// define what type data User & token requires
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