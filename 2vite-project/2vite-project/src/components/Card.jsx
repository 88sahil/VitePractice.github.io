import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card w-60  rounded-sm bg-green-500 h-60 shadow-2xl' >
      <h1>name: {props.name}</h1>
      <h2>age: {props.age}</h2>
    </div>
)
}

export default Card