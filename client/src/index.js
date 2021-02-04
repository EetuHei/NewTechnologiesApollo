import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
})

const query = gql`
 query{
  getRocket  {
    id
    active
    boosters
    company
    cost_per_launch
    country
    description
    engines {
      layout
      number
      thrust_vacuum {
        kN
        lbf
        __typename
      }
      type
      version
      __typename
    }
    first_flight
    flickr_images
    rocket_id
    rocket_name
    rocket_type
    success_rate_pct
}
 }
`

client.query({ query })
  .then((response) => {
    console.log(response.data, 'initial res from server')
  }).catch(e => {
    console.error(e)
  })

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)