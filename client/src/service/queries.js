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
const MISSION_DETAILS = gql`
  fragment MissionDetails on Mission{
    mission_name
    mission_id
    manufacturers
    payload_ids
    wikipedia
    website
    twitter
    description
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

export const ALL_MISSIONS = gql`
query{
  getMissions{
    ...MissionDetails
  }
}
${MISSION_DETAILS}
`