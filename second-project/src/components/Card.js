import React from 'react'

const Card = (props) => {
  return (
    <div className='card flex flex-col h-60 w-60 rounded-xl shadow-xl bg-green-500 ml-6 mt-6 justify-center px-4'>
        <h1>name: {props.name}</h1>
        <h1>Age:{props.age}</h1>
    </div>
  )
}

export default Card