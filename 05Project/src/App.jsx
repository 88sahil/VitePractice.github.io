import React from 'react'
import UsercontextProvider from './Context/UsercontextProvider'
import Login  from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UsercontextProvider>
      <h1>ha sahil bhai</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App