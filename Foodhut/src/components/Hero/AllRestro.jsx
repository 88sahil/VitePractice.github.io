import React, { useContext } from 'react'
import star from '../../assets/Images/star.png'
import { FoodhutContext } from '../../Context/FoodhutContect'
import {Link} from 'react-router-dom'
const AllRestro = () => {
    const {Restaurant} = useContext(FoodhutContext)
  return (
    <div>
        <div>
            <a className='text-2xl font-bold ml-10 border-b-2 pb-1 border-black '>All Restaurant in Your City</a>
            <div className='flex gap-12 px-8 mt-10 flex-wrap justify-center'>
            {
                Restaurant.map((ele)=>{
                    return(
                        <div>
                           <Link to={`/Restro/${ele.id}`}>
                           <div className='w-52 hover:scale-105 duration-200'>
                                <div>
                                    <img src={ele.bg} alt="nologo" className='w-52 h-44 rounded-lg'></img>
                                </div>
                                <div className='mt-2'>
                                    <p className='font-bold'>{ele.name}</p>
                                    <div className='flex gap-1 items-center'>
                                        <img src={star} alt="star" className='w-4 h-4'></img>
                                        <a>{Number(ele.rating)}</a>
                                    </div>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            ele.category.map((ct)=>{
                                                return(
                                                    <a>{ct}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                           </Link>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default AllRestro