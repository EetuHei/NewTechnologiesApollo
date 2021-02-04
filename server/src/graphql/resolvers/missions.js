const { fetchData } = require('../dataSource/index')

const getMissionsData = async () => {
  // fetch data from baseURL/missions
  const res = await fetchData('missions')
  return res
}


module.exports = {
  getMissionsData
}