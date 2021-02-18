import React from 'react'
import { Link } from 'react-router-dom'
const Rockets = ({ rockets }) => {

  return(
    <div>
      <p>Rocket launch country</p>
      {rockets.map((data) => (
        <div key={data.id}>
          <Link to={`/rockets/${data.rocket_id}`}><p>{data.country}</p></Link>
        </div>
      ))}
    </div>
  )
}

export default Rockets