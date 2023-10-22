import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Navs } from './Nav'

const Header = () => {
  return (
   <header >
     <nav className='flex w-full sticky shadow-md justify-between pl-2 py-2'>
        <Link to="/" className='flex items-center order-1'>
            <a className='text-2xl font-extrabold'>Your <span className='text-red-500'>Logo<sup>&#9415;</sup></span></a>
        </Link>
        <div className='flex order-3 mr-5'>
            <Link to="/" className='flex items-center gap-3'>
                <button className=' bg-gray-500 py-2 px-3 text-white shadow-md rounded-md text-[10px]'>Sign In</button>
                <button className=' bg-gray-500 py-2 px-3 text-white shadow-md rounded-md text-[10px]'>Sign Up</button>
            </Link>
        </div>
        <ul className='flex gap-5 order-2 '>
            {
                Navs.map((items)=>(
                    <li className=''>
                        <NavLink to={items.to} className={({isActive})=>
                             `block py-2 text-[15px] pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }>
                            {items.label}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>
   </header>
  )
}

export default Header