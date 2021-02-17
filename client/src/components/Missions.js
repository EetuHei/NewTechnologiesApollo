import React from 'react'
import { Link } from 'react-router-dom'

const Missions = ({ missions }) => {
  console.log(missions, 'missions data')
  return(
    <div>
      <p>All mission information</p>
      {missions.map((data) => (
        <div key={data.id}>
          <Link to={`/missions/${data.mission_id}`}> <p>{data.mission_name}</p></Link>
        </div>
      ))}
    </div>
  )
}

export default Missions