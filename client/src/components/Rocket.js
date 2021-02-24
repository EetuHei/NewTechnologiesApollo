import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ROCKET_BY_ID } from '../service/queries'
import { useParams } from 'react-router-dom'

const Rocket = () => {
  let { id } = useParams()
  const result = useQuery(GET_ROCKET_BY_ID, { variables: { rocket_id: id } } )

  if(result.loading)return <div>loading...</div>

  return(
    <div>
      <h2>{result.data.getRocketDataById.rocket_name}</h2>
      <h3></h3>
    </div>
  )
}

export default Rocket