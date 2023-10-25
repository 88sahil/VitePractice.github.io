import React from 'react'
import '../../App.css'
import logo from '../../assets/pngwing.com.png'
import insta from '../../assets/instagram_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
import pintester from '../../assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='mt-10 border-t border-black/20 bg-gray-100'>
        <div>
            <div className='mt-10 flex justify-center pb-8 items-center gap-4'>
                <img src={logo} className='img-1 w-28 h-28'></img>
                <a className='font-extrabold text-5xl'>Food<span className='text-red-500'>Hut</span></a>
            </div>
            <div className='flex gap-8 justify-center '>
                <img src={whatsapp} className='h-4 w-4' alt="wp"></img>
                <img src={insta} className='h-4 w-4' alt="wp"></img>
                <img src={pintester} className='h-4 w-4' alt="wp"></img>
            </div>
        </div>
        <div className='border border-gray-500 border-solid mt-16 mx-44'>
        </div>
        <div className='flex mt-1 justify-center pt-2 pb-2'>
          <p className='text-sm'>Copyright @2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer