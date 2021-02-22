const { ApolloServer } = require('apollo-server')
const { resolvers } = require('./graphql/resolvers')
const { typeDefs } = require('./graphql/typeDef')
const jwt = require('jsonwebtoken')
const db = require('../db.json')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if( auth && auth.toLocaleLowerCase().startsWith('bearer ')){
      const decodeToken = jwt.verify(auth.substr(7), process.env.JWT_SECRET)
      const currentUser = db.user.find(x => x.id === decodeToken.id)
      return { currentUser }
    }
  }
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`)
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`)
})