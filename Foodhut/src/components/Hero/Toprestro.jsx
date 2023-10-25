import React, { useContext } from 'react'
import { FoodhutContext } from '../../Context/FoodhutContect'
import star from '../../assets/Images/star.png'
import { Link } from 'react-router-dom';
const Toprestro = () => {
    const {Restaurant,addrestro} = useContext(FoodhutContext);
    const toprestro = addrestro.filter((ele)=>{
        return Number(ele.rating)>=4
    })
    console.log(toprestro)
  return (
    <div className='p-8'>
        <p className='text-3xl font-extrabold'>Top Restaurant in your City</p>
        <div className='flex gap-8 px-8 mt-4 flex-wrap justify-center   '>
            {
                toprestro.map((ele)=>{
                    return(
                        <div>
                           <Link to={`/Restro/${ele.id}`}>
                           <div className='w-44 hover:scale-105 duration-200'>
                                <div>
                                    <img src={ele.bg} alt="nologo" className='w-44 h-44 rounded-lg'></img>
                                </div>
                                <div className='mt-2'>
                                    <p className='font-bold'>{ele.name}</p>
                                    <div className='flex gap-1 items-center'>
                                        <img src={star} alt="star" className='w-4 h-4'></img>
                                        <a>{Number(ele.rating)}/5</a>
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
  )
}

export default Toprestro