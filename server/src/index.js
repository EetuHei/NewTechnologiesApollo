const { ApolloServer } = require('apollo-server');
const { resolvers } = require('./graphql/resolvers')
const { typeDefs } = require('./graphql/typeDef')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
      return new Error(`API responded with error code: ${err.extensions.code}`)
    },
    context: async ({ req }) => {
      const auth = req ? req.headers.authorization : null
      if (auth && auth.toLocaleLowerCase().startsWith('bearer')) {
        const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET)
        const currentUser = await User.findById(decodedToken.id)
        return { currentUser }
      }
    },
  })
  
  server.listen().then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`)
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`)
  })