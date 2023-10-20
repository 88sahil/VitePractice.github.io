import React, { useContext, useState } from 'react'
import UserContext from '../Context/Usercontax'
const Login = () => {
  const[username,setusername] =  useState('')
  const[pass,setpass] = useState('')

  const {setuser} = useContext(UserContext)
  function handlesubmit(e){
    e.preventDefault();
    setuser({username,pass})
  }
  return (
    <>
      <div>
        <input type="text" 
          value={username}
          onChange={(e)=>setusername(e.target.value)}
          placeholder='username'
        />
         <input type="password" 
          value={pass}
          onChange={(e)=>setpass(e.target.value)}
          placeholder='password'
        />
        <button onClick={handlesubmit}>Submit</button>

      </div>
    </>
  )
}

export default Login