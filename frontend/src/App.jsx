import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import AdminPanel from './pages/AdminPanel'
import Login from './pages/Login'
const App = () => {
  return (
  <div className='container p-5 '>
    <Navbar/>
      <Routes >
        <Route path="/"  element={<Home/>}/>
        <Route path="/collection"  element={<Collection/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/admin"  element={<AdminPanel/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/login"  element={<Login/>}/>
      </Routes>
    <Footer/>
  </div>
  )
}

export default App
