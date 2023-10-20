import React from 'react'
import UserContext from '../Context/Usercontax'
const Profile = () => {
    const {user} = useContext(useContext)
    if(!user) return <div>Please Login</div>
  return (
    <div>
        welcome {user.usename}
    </div>
  )
}

export default Profile