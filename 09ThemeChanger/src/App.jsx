import React, { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/ThemeContext'
import ThmemeButton from './components/ThmemeButton'
const App = () => {
  const [thememode,setthememode] = useState("light")
  const darkmode =()=>{
    setthememode("dark")
  }
  const lightmode=()=>{
    setthememode("light")
  }
  useEffect(()=>{
    document.querySelector("html").remove("dark","light")
    document.querySelector("html").addEventListener(thememode)
  },[thememode])
  return (
    <ThemeContextProvider values={{thememode,darkmode,lightmode}}>
      <div className='flex flex-wrap min-h-screen justify-center'>
        <div className='w-full'>
          <div className='flex w-full max-w-sm mx-auto justify-end mb-4'>
            <ThmemeButton/>
          </div>
          <div className='w-full max-w-sm mx-auto'>
            {/* card */}
          </div>
        </div>

      </div>
    </ThemeContextProvider>
  )
}

export default App