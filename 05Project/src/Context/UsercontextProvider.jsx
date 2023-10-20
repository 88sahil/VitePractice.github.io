import React from 'react'
import UserContext from './Usercontax'
import { useState } from 'react'
const UsercontextProvider = ({children}) => {
    const [user,setuser] = useState('')
  return (
    <UserContext.Provider value={{user,setuser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UsercontextProvider