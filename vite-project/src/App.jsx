import React from 'react'
import { useState } from 'react'
import './App.css'

export const App = () => {
  let [counter,setcounter] = useState(15)
  function addvalue(){
    counter = counter+1
    setcounter(counter)
  }
  function removeValue(){
    counter = counter-1
    setcounter(counter)
  }
  return (
    <div>
      <h1>counter is : {counter}</h1>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App