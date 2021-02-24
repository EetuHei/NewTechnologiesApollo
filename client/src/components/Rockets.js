import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@material-ui/core'

const Rockets = ({ rockets }) => {

  return(
    <div>
      <Typography variant="h5" style={ { paddingTop:'200px', paddingBottom:'100px', textAlign:'center' } }>Information about rockets</Typography>
      <Grid container spacing={0} direction="row" alignContent="center" justify="center">
        {rockets.map((data) => (
          <div key={data.id}>
            <Link to={`/rockets/${data.rocket_id}`}>
              <Grid item xs={12} style={ { margin:'10px' } }>
                <Button size ="medium" variant="contained" color="secondary" style={ { textDecoration:'underline' } }>{data.rocket_name}</Button>
              </Grid>
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default Rockets