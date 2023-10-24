import React, { useContext } from 'react'
import logo  from '../../assets/pngwing.com.png'
import Navs from '../../assets/Navs/Navs'
import {Link,NavLink} from 'react-router-dom'
import cart from '../../assets/Images/cart.png'
import { FoodhutContext } from '../../Context/FoodhutContect'
const Navbar = () => {
    const {count} = useContext(FoodhutContext)
  return (
    <div>
        <div className='w-full shadow-md p-4 flex justify-between'>
            <Link to="/">
            <div className='flex items-center gap-2'>
                <img src={logo} alt="no logo" className='w-14 h-14'></img>
                <a className='font-extrabold text-3xl'>Food<span className='text-red-500'>Hut</span></a>
            </div>
            </Link>
            <div className='flex gap-4 items-center'>
                {
                    Navs.map((ele)=>{
                       return (
                                <NavLink to={ele.to} className={({isActive})=>
                                `block py-2 text-lg pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }>{ele.title}</NavLink>
                             )
                    })
                }
            </div>
            <div className='flex items-center gap-3 mr-10'>
                <Link to="/Login"><button className='bg-red-500 px-3 text-sm py-2 text-white rounded-lg'>Login</button></Link>
                <Link to="/cart">
                <div>
                    <img src={cart} alt="cart" className='w-6 h-6 relative'></img>
                    <div className='absolute top-2 ml-4 mt-3 bg-orange-400 text-white rounded-full w-4 h-4 flex justify-center items-center text-[10px]'>{count}</div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar