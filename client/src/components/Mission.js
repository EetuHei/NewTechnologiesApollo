import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MISSION_BY_ID } from '../service/queries'
import { useParams } from 'react-router-dom'

const Mission = () => {
  let { id } = useParams()

  const result = useQuery(GET_MISSION_BY_ID, { variables: { mission_id: id } } )

  if(result.loading)return <div>loading...</div>

  return(
    <div>
      <h2>{result.data.getMissionDataById.mission_name}</h2>
      <h3></h3>
    </div>
  )
}

export default Mission