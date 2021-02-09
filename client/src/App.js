import { React, useEffect, useState } from 'react'
import {
  useQuery,
} from '@apollo/client'
import { ALL_ROCKETS } from './service/queries'

import Rocket from './components/Rocket'

const App = () => {
  const result = useQuery(ALL_ROCKETS)
  const [initalData, setInitialData] = useState([])

  useEffect(() => {
    if(result.data){
      setInitialData(result.data.getRocket)
      localStorage.setItem('intialData', JSON.stringify(result.data))
    }
  })

  if (result.loading) {
    return <div>loading...</div>
  }

  if (initalData.length === 0) {
    console.error('failed to fetch... setting data from local storage')
    const dataInStore = JSON.parse(localStorage.getItem('intialData'))
    setInitialData(dataInStore)
  }


  return (
    <div>
      <h1>Space Rockets</h1>
      <Rocket rockets = {initalData.getRocket}/>
    </div>
  )
}

export default App
