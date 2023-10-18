import React from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrency'
import Input from './components/Input'
const App = () => {
  return (
   <div className=' main w-full  flex justify-center bg-green-500'>
     <Input/>
   </div>
  )
}

export default App