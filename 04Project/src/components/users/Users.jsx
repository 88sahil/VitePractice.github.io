import React from 'react'
import {useParams} from 'react-router-dom'
const Users = () => {
    const {userid} = useParams()
  return (
    <div>
         <div className='bg-gray-600 text-white text-3xl p-4 text-center'>User: {userid}</div>
    </div>
  )
}

export default Users