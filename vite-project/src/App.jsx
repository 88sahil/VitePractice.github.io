import React from 'react'
import { useState } from 'react'
import './App.css'

export const App = () => {
  let [counter,setcounter] = useState(1)
  let clock = true
  function addvalue(){
    if(clock==true)
      {
       setInterval.current =  setInterval(()=>{
        counter = counter+1
        setcounter(counter)
      },1000)
    }
  }

  function removeValue(){
    clearInterval(se)
  }
  return (
    <div class="cont">
      <h1>counter is : {counter}</h1>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App