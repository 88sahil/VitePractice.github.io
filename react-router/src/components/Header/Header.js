import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className='w-full '>
          <div>
            <Link to="/" className='flex items-center'>
              Hello
            </Link>
          </div>
      </nav>
    </header>
  )
}

export default Header