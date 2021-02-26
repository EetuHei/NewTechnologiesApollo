import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MISSION_BY_ID } from '../service/queries'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const Mission = () => {
  let { id } = useParams()

  const result = useQuery(GET_MISSION_BY_ID, { variables: { mission_id: id } } )

  if(result.loading)return <div>loading...</div>

  return(
    <div>
      <Grid container spacing={0} style={ { marginTop:'2%' } } justify="center">
        <Card style={ { width: '30%' }} variant="outlined">
          <CardContent>
            <h2>Mission name: {result.data.getMissionDataById.mission_name}</h2>
            <Typography variant="subtitle2">
              <p><b>Manufacturer of the mission:</b> {result.data.getMissionDataById.manufacturers}</p>
              <p><b>Mission description:</b> {result.data.getMissionDataById.description}</p>
              <p><b>Mission on Wikipedia:</b> <a href={result.data.getMissionDataById.wikipedia} style={ { textDecoration: 'none', color: 'white' } }>{result.data.getMissionDataById.wikipedia}</a></p>
              <p><b>Mission Website:</b> <a href={result.data.getMissionDataById.website} style={ { textDecoration: 'none', color: 'white' } }>{result.data.getMissionDataById.website}</a></p>
            </Typography>
            <Link to="/missions"style={ { textDecoration:'none' } }>
              <Button variant="outlined" style={ { marginRight:'3%' } }>
                Back to missions
              </Button>
            </Link>
            <Link to="/"style={ { textDecoration:'none' } }>
              <Button variant="outlined">
                Back to main page
              </Button>
            </Link>
          </CardContent>
        </Card>
        {/* <img src={result.data.getRocketDataById.flickr_images[0]} width="20%"></img> */}
      </Grid>
    </div>
  )
}

export default Mission