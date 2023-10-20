import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/Usercontax'
const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user.username)
    if(!user) return <div>Please Login</div>
  return (
    <div>
        welcome {user.username}
    </div>
  )
}

export default Profile