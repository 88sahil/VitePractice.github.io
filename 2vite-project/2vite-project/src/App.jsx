import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
const myobj ={
  name:'sahil',
  surname:'maliya'
}
let [counter,setcounter] = useState(0)
function add(){
  counter=  counter+1
  setcounter(counter)
}
let src = ['https://imgs.search.brave.com/cu9Tj1j9X3ikCtsd7VDLKwbzrduMU4kQnzqpbvLIjtU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w','https://imgs.search.brave.com/eQiyHnGIZitZZvE2umYt_ReH6OD5YLimXEuQpk9aRyY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn']
  return (
    <>
    <Card src =  {src[0]}/>
      <div className='flex justify-center mt-5' > 
        <h1>Conter:{counter}</h1> 
        <button className='bg-green-500  mt-8 p-3 rounded-2xl shadow text-indigo-500'onClick={add} >Clickme</button>
      </div>

    </>
  )
}

export default App
