const {fetchData} = require("../dataSource/index")

const getRocketsData = async () => {
    // fetch data from baseURL/rockets
    const res = await fetchData('rockets')
    return res
}


module.exports = {
    getRocketsData
}