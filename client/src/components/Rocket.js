import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_ROCKET_BY_ID } from '../service/queries'
import { useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const Rocket = () => {
  let { id } = useParams()
  const result = useQuery(GET_ROCKET_BY_ID, { variables: { rocket_id: id } } )

  if(result.loading)return <div>loading...</div>

  return(
    <div>
      <Grid container spacing={0} style={ { marginTop:'5%' } } justify="center">
        <Card style={ { width: '20%' }} variant="outlined">
          <CardContent>
            <Typography variant="subtitle2">
              <h2>Rocket name: {result.data.getRocketDataById.rocket_name}</h2>
              <p><b>Country of the rocket:</b> {result.data.getRocketDataById.country}</p>
              <p><b>First flight:</b> {result.data.getRocketDataById.first_flight}</p>
              <p><b>Cost per launch:</b> ${result.data.getRocketDataById.cost_per_launch}</p>
              <p><b>Pictures of the rocket:</b> {result.data.getRocketDataById.flickr_images[0]}</p>
            </Typography>
            <Link to="/rockets"style={ { textDecoration:'none' } }>
              <Button variant="outlined" style={ { marginRight:'3%' } }>
                Back to rockets
              </Button>
            </Link>
            <Link to="/"style={ { textDecoration:'none' } }>
              <Button variant="outlined">
                Back to main page
              </Button>
            </Link>
          </CardContent>
        </Card>
        <img src={result.data.getRocketDataById.flickr_images[0]} width="20%"></img>
      </Grid>
    </div>
  )
}

export default Rocket