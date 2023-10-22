import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import ShowCategary from './components/Categary/ShowCategary'
import Product from './components/Product/Product'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>} ></Route>
      <Route path="/mens" element={<ShowCategary/>} ></Route>
      <Route path="/Women" element={<ShowCategary/>} ></Route>
      <Route path="/Kids" element={<ShowCategary/>} ></Route>
      <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App