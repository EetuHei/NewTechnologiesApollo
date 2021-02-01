const { query } = require("./query");
const {rocketType} = require('./types')

const typeDefs = [
  query,
  rocketType,
];

module.exports = {
  typeDefs,
};