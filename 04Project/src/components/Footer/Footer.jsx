import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { Navs } from '../Header/Nav'
const Footer = () => {
  return (
    <footer className='w-full shadow-black flex justify-around'>
      <div>
        <Link to="/" className='flex items-center'>
            <a className='text-3xl font-extrabold' >Your <span className='text-red-500'>Logo<sup>&#9415;</sup></span></a>
        </Link>
      </div>
      <div>
        <ul>
          {
            Navs.map((items)=>(
                    <li className=''>
                        <NavLink to={items.to} className={({isActive})=>
                             `text-[12px] text-black/40`
                        }>
                            {items.label}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
      </div>
      <div className='text-[12px] font-mono text-black/40'>
        <a>Contact:9712716355</a>
        <br/>
        <a href="sahilmaliya59@gmail.com">email:sahilmaliya55@gmail.com</a>
        <p>
          samaras Hostel,360005
          city:rajkot
        </p>
        </div>
    </footer>
  )
}

export default Footer