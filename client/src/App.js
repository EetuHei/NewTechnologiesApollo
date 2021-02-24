import { React } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  useQuery,
} from '@apollo/client'
import { ALL_MISSIONS, ALL_ROCKETS } from './service/queries'
import { Rockets, Rocket, Missions, Mission } from './components/index'
import 'fontsource-roboto'
import { Typography, Grid, Paper } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Picture from '../src/missions_pic.jpeg'

const App = () => {
  const result = useQuery(ALL_ROCKETS)
  const resultMission = useQuery(ALL_MISSIONS)

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={ { height: '100vh' } }>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h2" style={ { paddingTop:'20px', textAlign:'center' } }>
              Space Rockets
            </Typography>
          </Grid>
          <Route exact path="/">
            <Grid item xs={6}>
              <Typography variant="h5">
                <p style={ { textAlign:'center', paddingTop:'100px' } }>More about rockets</p>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">
                <p style={ { textAlign:'center', paddingTop:'100px' } }>More about missions</p>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Link to="/rockets">
                <img src={result.data.getRocket[0].flickr_images[1]} width="50%" height="300px" style={ { marginLeft:'auto', marginRight:'auto', display:'block' } }></img>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/missions">
                <img src={ Picture } height="300px" width="50%" style={ { marginLeft:'auto', marginRight:'auto', display:'block' } }></img>
              </Link>
            </Grid>
          </Route>
        </Grid>
        <Switch>
          <Route exact path="/rockets" render={() => <Rockets rockets = {result.data.getRocket} />} />
          <Route exact path="/rockets/:id"  render={() => <Rocket/>} />
          <Route exact path="/missions" render={() => <Missions missions = {resultMission.data.getMissions} />} />
          <Route exact path="/missions/:id"  render={() => <Mission/>} />
        </Switch>
      </Paper>
    </ThemeProvider>
  )
}

export default App
