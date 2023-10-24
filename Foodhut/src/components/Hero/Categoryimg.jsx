import React from 'react'
import { categoris } from '../../assets/Categories/Category'
import { Link } from 'react-router-dom'
const Categoryimg = () => {
  return (
    <div className='mt-16 border-b border-black/40 pb-4 mx-12'>
        <a className='border-b-2 border-black text-3xl font-bold'>What's in your mind?</a>
       <div className=' flex gap-8 justify-center mt-12 overflow-x-auto'>
       {
            categoris.map((ele)=>{
                return(
                    <Link to={`menu/${ele.id}`}>
                        <div key={ele.id}>
                        <div className='w-32'>
                            <img src={ele.image} alt="category" className='object-cover'></img>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg'>{ele.name}</p>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
       </div>
    </div>
  )
}

export default Categoryimg