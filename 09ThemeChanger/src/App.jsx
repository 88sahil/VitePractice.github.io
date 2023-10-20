import React, { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/ThemeContext'
import ThmemeButton from './components/ThmemeButton'
import Card from './components/Card'
const App = () => {
  const [thememode,setthememode] = useState("light")
  const darkmode =()=>{
    setthememode("dark")
  }
  const lightmode=()=>{
    setthememode("light")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(thememode)
  },[thememode])
  return (
    <ThemeContextProvider value={{thememode,darkmode,lightmode}}>
      <div className='flex flex-wrap min-h-screen justify-center items-center'>
        <div className='w-full'>
          <div className='flex w-full max-w-sm mx-auto justify-end mb-4'>
            <ThmemeButton/>
          </div>
          <div className='w-full max-w-sm mx-auto'>
            <Card/>
          </div>
        </div>

      </div>
    </ThemeContextProvider>
  )
}

export default App