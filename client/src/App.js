import { React, useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
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
      setInitialData(result.data)
    }
  }, [])

  if (result.loading) {
    return <div>loading...</div>
  }

  if (!result.loading && initalData.length === 0) {
    console.error('failed to fetch... setting data from local storage.')
    const dataInStore = JSON.parse(localStorage.getItem('intialData'))
    if (dataInStore === null) return(<div><h1>Cant display any data at this time, mostlikely issue with API provider.</h1></div>)
    setInitialData(dataInStore)
  }

  return (
    <div>
      <h1>Space Rockets</h1>
      <Route exact path="/">
        {initalData.getRocket ? (<div>
          <h3>More about rockets</h3>
          <Link to="/rockets">
            <img src={initalData.getRocket[0].flickr_images[1]}></img>
          </Link>
        </div>) : ('')}
      </Route>
      <Switch>
        <Route exact path="/rockets" render={() => <Rocket rockets = {initalData.getRocket} />} />
      </Switch>
    </div>
  )
}

export default App
