import React from 'react'
import {
  useQuery,
} from '@apollo/client'
import { ALL_ROCKETS } from './service/queries'

import Rocket from './components/Rocket'

const App = () => {
  const result = useQuery(ALL_ROCKETS)

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <p>React app js</p>
      <Rocket rockets = {result.data.getRocket}/>
    </div>
  )
}

export default App
