import React from 'react'
import './Card.css'

const Card = ({background}) => {
  return (
    <div className='card flex flex-col h-60 w-60 rounded-xl shadow-xl bg-green-500 ml-6 mt-6 justify-center px-4' style={{backgroundImage: `url(${background})`}}>
          
    </div>
  )
}

export default Card