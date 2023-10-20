import React, { useContext } from 'react'
import UserContext from '../Context/Usercontax'
const Profile = () => {
  const {user} = useContext(UserContext)

  if(!user) return <h1>please Login</h1>
  return (
    <h1>
      welcome {user.username}
    </h1>
  )
}

export default Profile