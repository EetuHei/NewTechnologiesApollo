const { gql } = require("apollo-server");

const query = gql`
    type Query{
        getRocket: [Rocket]!
    }
`
module.exports = {query}