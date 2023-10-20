import React from 'react'
import UsercontextProvider from './Context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
const App = () => {
  return (
    <UsercontextProvider>
        <Login />
        <Profile />
    </UsercontextProvider>
  )
}

export default App