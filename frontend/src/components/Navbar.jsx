import React from 'react'
import {Link} from 'react-router-dom'
import {assets } from "../assets/assets"


const Navbar = () => {
  return (
    <header className='flex items-center justify-between mb-10'>
       <Link to="/" className='w-36 object-obtain'><img src={assets.logo} alt="FOREVER" /></Link>

       <nav className=''>
          <ul className='flex items-center gap-3 capitalize'>
            <li className=''>
              <Link to="/">Home</Link></li>
            <li className=''>
              <Link to="/collection">collection</Link></li>
            <li className=''>
              <Link to="/about">about</Link></li>
            <li className=''>
              <Link to="/contact">contact</Link></li>
            <li className=''>
              <Link to="/admin">admin panel</Link></li>
          </ul>
       </nav>


       <ul className='flex items-center gap-3'>
        <li className=''><Link to="/collection"><img src={assets.search_icon} alt="" className='w-[20px]'/></Link></li>

        <li className=''><Link to="/login"><img src={assets.profile_icon} alt="" className='w-[20px]'/></Link></li>

        <li className=''><Link to="/cart"><img src={assets.cart_icon} alt="" className='w-[20px]' /></Link></li>
       </ul>
    </header>
  )
}

export default Navbar
