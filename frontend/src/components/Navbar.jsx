import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {assets } from "../assets/assets"

import { useParams } from 'react-router-dom'

const Navbar = () => {

const activeLink=({isActive})=>{
  return  isActive ? 'w-2/4 border-none h-[1.5PX] bg-gray-700' :'' 
  
}
  return (
    <nav className='flex items-center justify-between my-10'>
       <NavLink to="/" className='w-36 object-obtain'><img src={assets.logo} alt="FOREVER" /></NavLink>

        <ul className='flex items-center gap-3 capitalize'>
          <li className=''>
            <NavLink 
            to="/" >
            <span>Home</span>
            <hr className='w-2/4 border-none h-[1.5PX] bg-gray-700 hidden'/>
            </NavLink>
          </li>


          <li className=''>
          <NavLink 
            to="/collection" >
            <span>collection</span>
            <hr className='w-2/4 border-none h-[1.5PX] bg-gray-700 hidden'/>
            </NavLink>
            
            </li>
          <li className=''>
          <NavLink 
            to="/about" >
            <span>about</span>
            <hr className='w-2/4 border-none h-[1.5PX] bg-gray-700 hidden'/>
            </NavLink>
            </li>
          <li className=''>
          <NavLink 
            to="/contact" >
            <span>contact</span>
            <hr className='w-2/4 border-none h-[1.5PX] bg-gray-700 hidden'/>
            </NavLink>   
            
            </li>
          <li className=''>
          <NavLink 
            to="/admin" >
            <span>admin panel</span>
            <hr className='w-2/4 border-none h-[1.5PX] bg-gray-700 hidden'/>
            </NavLink>
            
            </li>
        </ul>
      


       <div className='flex items-center gap-3'>
          <Link to="/collection"><img src={assets.search_icon} alt="" className='w-5 cursor-pointer'/></Link>

          <div className='group relative'>
            <img src={assets.profile_icon} alt="" className='w-5'/>
        
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className='flex flex-col gap-2 w-36 bg-slate-100 px-5 '>
               <Link  to="/login" className='cursor-pointer hover:text-black'>My Profile</Link>
               <Link to="/orders" className='cursor-pointer hover:text-black'>Orders</Link>
               <Link to="/logout" className='cursor-pointer hover:text-black'>Logout</Link>
              </div>
            </div>
          </div>

          

            <Link to="/cart"><img src={assets.cart_icon} alt="" className='w-[20px]' /></Link>
       </div>
    </nav>
  )
}

export default Navbar
