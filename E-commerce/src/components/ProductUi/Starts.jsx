import React, { useCallback } from 'react'
import { useState } from 'react';
import ReactStars from 'react-rating-star-with-type'
const Starts = () => {
    const [star, setStar] = useState(null);
    const onChange=useCallback((nextValue)=>{
        setStar(nextValue)
    },[star])
  return (
    <div className='flex'>
            <ReactStars 
    onChange={onChange} 
    value={3}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#9177FF","#8568FC",]} 
    />
    <input
        type='number'
        value={star}
        className='w-8'
    ></input>
    </div>
  )
}

export default Starts