const { gql } = require("apollo-server");

const query = gql`
    type Query{
        getRocket: [Rocket]!,
        getMissions: [Mission]!
    }
`
module.exports = {query}