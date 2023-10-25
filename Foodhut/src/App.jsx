import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Signin from './components/Login/SIgnin'
import Cart from './components/Cart/Cart'
import Hero from './components/Hero/Hero'
import Menu from './assets/Menu/Menu'
import RestroInfo from './components/restroInfo/RestroInfo'
import Search from './components/Search/Search'
import Add from './components/Additems/Add'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route  path='/search' element={<Search/>}></Route>
        <Route path='/Menu' element={<Menu/>}>
          <Route path=':cartId' element={<Menu/>}></Route>
        </Route>
        <Route path='/Restro'>
          <Route path=':RestroId' element={<RestroInfo/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App