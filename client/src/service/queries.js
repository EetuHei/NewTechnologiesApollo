import { gql } from '@apollo/client'

const ROCKET_DETAILS = gql`
  fragment RocketDetails on Rocket{
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
`

export const ALL_ROCKETS = gql`
query{
  getRocket{
    ...RocketDetails
  }
}
${ROCKET_DETAILS}
`