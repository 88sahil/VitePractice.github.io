import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import Github from './components/GitHub/Github.jsx'
import { GithubInfo } from './components/GitHub/Github.jsx'
import Users from './components/users/Users.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}></Route>
     <Route path='about' element = {<About/>}></Route>
     <Route path='contactus' element={<Contactus/>}></Route>
     <Route path='users/:userid' element={<Users/>}></Route>
     <Route path='Github' 
     loader={GithubInfo} 
     element={<Github/>}></Route>
   </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
