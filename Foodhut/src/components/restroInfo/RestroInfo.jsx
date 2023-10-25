import React, { useContext } from 'react'
import { FoodhutContext } from '../../Context/FoodhutContect'
import {useParams} from 'react-router-dom'
import rate from '../../assets/Images/star.png'
import d from '../../assets/Images/delivery.png'
import Menu from '../../assets/Menu/Menu'
import veg from '../../assets/Images/veg.png'
const RestroInfo = () => {
  const {Restaurant,addrestro,addtocart} = useContext(FoodhutContext)
  const {RestroId} = useParams()
  const restorant = addrestro.find((ele)=>{
     return ele.id===Number(RestroId)
  })
  const rmenu = Menu.filter((ele)=>{
      return restorant.name === ele.rname
  })

  console.log(rmenu)
  return (
    <div className='w-full'>
         <div className='text-lg font-bold mt-4'>Home/{restorant.name}</div>
        <div className='flex justify-center'>
       
            <div className='flex justify-around w-5/12 mt-5 border-b border-black border-dotted shadow-md p-4'>
              <div className=' '>
                <a className='text-xl font-extrabold'>{restorant.name}</a>
                <div>{
                    restorant.category.map((ct)=>{
                      return(
                        <a className='mr-2 text-black/50'>{ct}</a>
                      )
                    })
                  }</div>
                  <div className='mt-4'>
                    <div className='flex gap-2 items-center'>
                    <img src={d} className='w-6 h-6 ' alt="delivery"></img>
                    <a className='flex justify-center'>Delivert Changes apply based on distance</a>
                    </div>
                  </div>
              </div>
                <div className='flex items-center gap-1'>
                  <img src={rate} alt="rate" className='w-4 h-4'></img>
                  <a>{restorant.rating}</a>
              </div>
            </div>
            {/* menu appears */}
         
            
        </div>
        <div className=''>
                  {
                    rmenu.map((ele,index)=>{
                      return(
                        <div className='flex justify-center mt-4'>
                          <div key={index} className='mt-4 w-8/12  flex justify-between border-b border-gray-700 pb-8 '>
                          <div className='w-7/12'>
                              <img src={veg} className='h-5 w-5'></img>
                              <p className='font-extrabold'>{ele.name}</p>
                              <p className='text-red-600 font-bold'>&#8377;{ele.price}</p>
                              <p className='flex flex-wrap'>{ele.discri}</p>
                          </div>
                          <div className='flex'>
                            <img src={ele.image} className='h-[100px] w-[150px] rounded-xl relative'></img>
                            <div className='absolute mt-20 ml-12'>
                                <button className='bg-green-500 px-3 py-2 rounded-xl duration-200 text-white active:scale-90 shadow-xl ' onClick={()=>{addtocart(ele.id)}}>Add</button>
                            </div>
                          </div>
                        </div>
                        </div>
                      )
                    })
                  }
          </div>
    </div>
  )
}

export default RestroInfo