import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Products from './components/products/Products'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Restaurant from './components/restaurant/Restaurant'
import PageNotFound from './components/pagenotfound/PageNotFound'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/restaurant' element={<Restaurant/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/*' element={< PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
