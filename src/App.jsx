import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'
import CategoryProduct from './components/CategoryProduct'
const App = () => {
  const[location, setLocation]= useState()

  const getLocation =async ()=>{
navigator.geolocation.getCurrentPosition(async pos=>{
  const {latitude, longitude}= pos.coords;
  const url= `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  try{
    const location =await axios.get(url);
    const exactLocation= location.data.address
   
    setLocation(exactLocation)
  }
  catch(error)
  {
    console.log(error)
  }
})
  }

  useEffect(()=>{
    getLocation();
  },[])
  return (
   
    <BrowserRouter>
     <Navbar location={location} getLocation={getLocation}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<SingleProduct/>}></Route>
            <Route path='/category/:category' element={<CategoryProduct/>}></Route>
             <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart location={location} getLocation={getLocation}/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
