import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import img1 from '../images/img1.png'
import playstore from '../../assets/icons/playstore.png'
import img2 from '../images/img2.png'
const Home = () => {
  return (
    <>
       <div className='min-h-screen flex justify-around items-center p-4'>
      <div className='mb-10'>
      <img src={img1} alt="no" 
        width={250}
        height={250}
      />
    </div>
    <div>
      <button className='bg-red-500 border border-black/10 px-4 w-auto flex items-center gap-2 justify-center py-2  rounded-lg'><img src={playstore} width={20} height={20} className='flex'/>
        <a>Download Now</a></button>
      <p className='flex text-yellow-950 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolorum.</p>
    </div>
    </div>
    <div className='flex flex-wrap justify-around items-center p-4 mb-10'>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, architecto!</p>
        </div>
        <div>
          <img src={img2}
          alt='no logo'
          width={250}
          height={250}
          />
        </div>
    </div>
    </>
   
  )
}

export default Home