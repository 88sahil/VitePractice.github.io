import { useState } from 'react'
import './App.css'

function App() {
  const [colors, setColor] = useState("green")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:colors}}>
        <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bg-white gap-3 px-3 py-2 rounded-3xl shadow-lg'>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")} >blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
