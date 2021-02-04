const { gql } = require('apollo-server')

// define what data you can query for rockets
const rocketType = gql`
  type Rocket{
        id: Int
        active: Boolean
        boosters: Int
        cost_per_launch: Int
        success_rate_pct: Int
        first_flight: String
        country: String
        company: String
        rocket_name: String
        rocket_id: String
        rocket_type: String
        engines: Engines
        flickr_images: [String]
        description: String
      }

    type Engines{
        number: Int,
        type: String
        version: String
        layout: String
        thrust_vacuum: ThrustVacuum
    }
      
    type ThrustVacuum{
        kN: Int
        lbf: Int
    }
`

module.exports = { rocketType, }