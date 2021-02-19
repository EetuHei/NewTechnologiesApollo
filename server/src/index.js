const { ApolloServer } = require('apollo-server')
const { resolvers } = require('./graphql/resolvers')
const { typeDefs } = require('./graphql/typeDef')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return new Error(`API responded with error code: ${err.message}`)
  },
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`)
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`)
})