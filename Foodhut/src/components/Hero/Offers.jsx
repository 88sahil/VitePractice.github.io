import React from 'react'
import Banners from '../../assets/Banners/Banners'
import '../../App.css'
import { Link } from 'react-router-dom'
import left from '../../assets/Images/left.png'
import right from '../../assets/Images/right.png'
const Offers = () => { 
  let scrollcontainer = document.querySelector(".offer-div")
  let btn1 = document.getElementById("btn1")
  let btn2 = document.getElementById("btn2")
  
  const scrolllefts =()=>{
    scrollcontainer.scrollLeft -= 900
  }
  const scrollright =()=>{
    scrollcontainer.scrollLeft += 900
  }
  return (
    <div>
      <div className='offer-div flex flex-1 gap-8 overflow-x-auto w-full p-8'>
      {
        Banners.map((ele,index)=>{
          return(
              <img src={ele} alt="none" className='w-92 h-60 rounded-lg duration-300 hover:scale-110' />

          )
        })
      }
    </div>
      <div className='flex justify-end mr-6'>
        <img src={left} id="btn1" onClick={scrolllefts}></img>
        <img src={right} id="btn2" onClick={scrollright}></img>
      </div>
    </div>
  )
}

export default Offers