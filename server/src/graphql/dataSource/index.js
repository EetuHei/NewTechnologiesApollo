require('dotenv').config()
const fetch = require('node-fetch')

const fetchData = async (args) => {
  const baseURL = process.env.baseURL

  // if args are not given, default args to empty string to fetch baseURL data
  if (args === undefined) args = ''

  const res = await fetch(`${baseURL}/${args}`)
  return res.json()
}

module.exports = {
  fetchData
}