const { fetchData } = require('../dataSource/index')

const getMissionsData = async () => {
  // fetch data from baseURL/missions
  const res = await fetchData('missions')
  return res
}
const getMissionDataById = async (args) => {
  // fetch data from baseURL/missions
  const res = await fetchData(`missions/${args}`)
  return res
}


module.exports = {
  getMissionsData, getMissionDataById
}