import React, { useState } from 'react'
import UserContext from './Usercontax'
const UsercontextProvider = ({children}) => {
  const [user,setuser] = useState('')
  return (
    <UserContext.Provider value={{user,setuser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UsercontextProvider