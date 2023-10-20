import { useContext, useState } from 'react'
import React from 'react'
import UserContext from '../Context/Usercontax'
export const Login = () => {
    const [username,seusername] = useState(null)
    const [pass,setpass] = useState(null)
    const {setuser} = useContext(useContext)
    function handlesubmit(e){
        e.preventDefault()
        setuser(username)
    }
  return (
    <div>
        <input 
            type="text"
            value={username}
            onChange={seusername((e)=>{e.target.value})}
            placeholder='username'
        ></input>
        <input 
            type="password"
            value={pass}
            onChange={setpass((e)=>{e.target.value})}
            placeholder='Password'
        ></input>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}
