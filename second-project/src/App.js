import React from 'react'
import {useState,useCallback,useEffect,useRef} from 'react'
import './App.css'
const App = () => {
const [length,setlength] = useState(8)
const [numbersAl,setnumberAl] = useState(false)
const [charAl,setcharAl] = useState(false)
const [pass,setpass]=useState("")
let passref = useRef(null)
const passwordgenerator = useCallback(()=>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbersAl) str+="0123456789";
  if(charAl) str+="`~!@#$[{]}%^&*()_+=,<.>/?";

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()* str.length)

    pass += str.charAt(char)
  }
  setpass(pass)
},[length,numbersAl,charAl,setpass])

useEffect(()=>{
  passwordgenerator()
},[length,charAl,numbersAl,passwordgenerator])

const Copy = useCallback(()=>{
  passref.current?.select()
  window.navigator.clipboard.writeText(pass)
},[pass])
  return (
   
   <div className='w-full  min-w-md bg-black '>
    <div className='div2 bg-gray-500 w-full '>
      <h1 className='nan text-white text-center text-3xl p-5'>password generator</h1>
      <div className='flex justify-center pb-11'>
        <input type='text' className='textbox pl-2 py-4 shadow-md ' placeholder='password' id="passwordarea" value={pass} readOnly ref={passref}></input>
        <button className='btn py-4 bg-blue-600 px-8 text-teal-100 shadow-md' onClick={Copy}>Copy</button>
      </div>
      <div className='flex justify-center pb-4'>
        <input type="range" min={8} max={100} onChange={(e)=>{setlength(e.target.value)}}></input>
        <label className='nan text-orange-500 '>length:{length}</label>
        <input type="checkbox" defaultChecked={numbersAl} className='ml-2' onChange={()=>{setnumberAl((prev) => !prev)}}></input>
        <label className='ml-1'>Number</label>
        <input type="checkbox" defaultChecked={charAl} className='ml-2' onChange={()=>{setcharAl((prev)=> !prev)}}></input>
        <label className='ml-1'>Characters</label>
      </div>
    </div>

   </div>

  )
}

export default App
