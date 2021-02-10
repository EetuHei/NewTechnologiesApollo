const { fetchData } = require('../dataSource/index')

const getMissionsData = async () => {
  // fetch data from baseURL/missions
  const res = await fetchData('missions')
  return res
}
const getMissionDataByName = async (args) => {
  // fetch data from baseURL/missions
  const res = await fetchData(`missions/${args}`)
  return res
}


module.exports = {
  getMissionsData, getMissionDataByName
}