import React from 'react'
import Banners from '../../assets/Banners/Banners'
import '../../App.css'
import { Link } from 'react-router-dom'
const Offers = () => { 
  let scrollcontainer = document.querySelector(".offer-div")
  setInterval(()=>{
    scrollcontainer.style.scrollBehavior="smooth"
    scrollcontainer.scrollLeft +=0.02
  },50000)
  return (
    <div className='offer-div flex flex-1 gap-8 overflow-x-auto w-full p-8'>
      {
        Banners.map((ele,index)=>{
          return(
              <img src={ele} alt="none" className='w-92 h-60 rounded-lg duration-300 hover:scale-110' />

          )
        })
      }
    </div>
  )
}

export default Offers