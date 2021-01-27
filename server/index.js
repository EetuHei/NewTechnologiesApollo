const { ApolloServer, gql } = require('apollo-server')

let persons = [
    {
      name: "test test",
      phone: "040-123543",
      street: "Kotkantie 1",
      city: "Oulu",
      id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
      name: "test2 test2",
      phone: "040-432342",
      street: "Kotkantie 2",
      city: "Oulu",
      id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
      name: "test3 test3",
      street: "Kotkantie 3",
      city: "Oulu",
      id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
  ]
  
  const typeDefs = gql`
    type Person {
      name: String!
      phone: String
      street: String!
      city: String! 
      id: ID!
    }
  
    type Query {
      personCount: Int!
      allPersons: [Person!]!
      findPerson(name: String!): Person
    }
  `

  const resolvers = {
    Query: {
      personCount: () => persons.length,
      allPersons: () => persons,
      findPerson: (root, args) =>
        persons.find(p => p.name === args.name)
    }
  }

const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })