import React from 'react'
import { categoris } from '../../assets/Categories/Category'
import { Link } from 'react-router-dom'
import '../../App.css'
const Categoryimg = () => {
  return (
    <div className='mt-16 border-b border-black/40 pb-4 mx-12'>
        <a className='border-b-2 border-black text-3xl font-bold'>What's in your mind?</a>
       <div className='ct-1 flex gap-8 justify-center mt-12 overflow-x-auto ml-19'>
       {
            categoris.map((ele)=>{
                return(
                    <Link to={`menu/${ele.id}`} className='w-44'>
                        <div key={ele.id}>
                        <div className='w-44 flex justify-center'>
                            <img src={ele.image} alt="category" className='h-32'></img>
                        </div>
                        <div className='flex justify-center '>
                            <a className='text-lg'>{ele.name}</a>
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