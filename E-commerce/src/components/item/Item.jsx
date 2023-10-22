import React from 'react'

const Item = (props) => {
  return (
    <div className='w-48 h-92 p-4 shadow-xl' key={props.id}>
        <img src={props.image} className='h-44 w-40' alt="item"></img>
        <div>
        <p className='text-[12px]'>{props.name}</p>
        <p className='font-bold'>{props.newprice}</p>
        <p className='line-through'>{props.oldprice}</p>
        </div>
    </div>
  )
}

export default Item