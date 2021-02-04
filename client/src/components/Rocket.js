import React from 'react'

const Rocket = ({ rockets }) => {
  console.log(rockets, 'rockets data')
  return(
    <div>
      <p>Rocket launch country</p>
      {rockets.map((data) => (
        <p key={data.id}>{data.country}</p>
      ))}
    </div>
  )
}

export default Rocket