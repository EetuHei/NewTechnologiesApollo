import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
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
    console.log(response.data, 'initial response from server')
  }).catch(e => {
    console.error(e)
  })

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)