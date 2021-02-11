import { React } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
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

  if(result.error){
    return(
      <div>
        <h3>Cant display any data at this time, issues with API provider.</h3>
      </div>
    )
  }

  return (
    <div>
      <h1>Space Rockets</h1>
      <Route exact path="/">
        <h3>More about rockets</h3>
        <Link to="/rockets">
          <img src={result.data.getRocket[0].flickr_images[1]}></img>
        </Link>
      </Route>
      <Switch>
        <Route exact path="/rockets" render={() => <Rocket rockets = {result.data.getRocket} />} />
      </Switch>
    </div>
  )
}

export default App
