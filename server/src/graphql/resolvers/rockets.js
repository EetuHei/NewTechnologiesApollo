const { fetchData } = require('../dataSource/index')

const getRocketsData = async () => {
  // fetch data from baseURL/rockets
  const res = await fetchData('rockets')
  return res
}
const getRocketDataById = async (args) => {
  // fetch data from baseURL/rockets
  const res = await fetchData(`rockets/${args}`)
  return res
}

module.exports = {
  getRocketsData,
  getRocketDataById
}