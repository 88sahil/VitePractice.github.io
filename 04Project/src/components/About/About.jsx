import React from 'react'
import img3 from '../images/img3.png'
const About = () => {
  return (
    <div className='min-h-screen flex flex-wrap justify-around items-center'>
        <div>
            <img
                src={img3}
                height={500}
                width={200}
                alt="stop"
                title='stop'
            />
        </div>
        <div>
            <h1 className='text-3xl font-extrabold pb-8'>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default About