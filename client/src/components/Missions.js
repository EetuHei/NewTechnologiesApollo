import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@material-ui/core'

const Missions = ({ missions }) => {
  console.log(missions, 'missions data')
  return(
    <div>
      <Typography variant="h5" style={ { paddingTop:'200px', paddingBottom:'100px', textAlign:'center' } }>Information about missions</Typography>
      <Grid container spacing={0} direction="row" alignContent="center" justify="center">
        {missions.map((data) => (
          <div key={data.id}>
            <Link to={`/missions/${data.mission_id}`}>
              <Grid item xs={12} style={ { margin:'10px' } }>
                <Button size ="medium" variant="contained" color="secondary" style={ { textDecoration:'underline' } }>{data.mission_name}</Button>
              </Grid>
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default Missions