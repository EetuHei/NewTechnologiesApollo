import React from 'react'

const Mission = ({ missions }) => {
  console.log(missions, 'missions data')
  return(
    <div>
      <p>Rocket launch country</p>
      {missions.map((data) => (
        <p key={data.id}>{data.mission_name}</p>
      ))}
    </div>
  )
}

export default Mission