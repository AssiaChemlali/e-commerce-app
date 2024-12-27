import React, { useContext, useEffect, useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import {assets } from "../assets/assets"
import SearchBox from './SearchBox'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {
  const [visible,setVisible]=useState(false)
  const {setOpenSearchBox,getCartCount}=useContext(ShopContext)
 
 
   const links=[
      {
        label:"Home",
        href:"/"
      },
      {
        label:"collection",
        href:"/collection"
      },
      {
        label:"about",
        href:"/about"
      },
      {
        label:"contact",
        href:"/contact"
      },
      {
        label:"Admin Panel",
        href:"/admin"
      },
   ]

 

  return (
    <>
    
    <nav className='flex items-center justify-between my-5 relative'>
       <NavLink to="/" className='w-36 object-obtain'><img src={assets.logo} alt="FOREVER" /></NavLink>

        <ul className='hidden sm:flex items-center gap-3 capitalize '>
          {links?.map((link,index)=>{
            return(
              <li className='uppercase text-sm ' key={index}>
              <NavLink 
              to={link.href} >
              <span>{link.label}</span>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden translate-x-2/4'/>
              </NavLink>
            </li>
            )
          })}
        
        </ul>
    
       <div className='flex items-center gap-3'>
          <Link to="/collection" onClick={()=>setOpenSearchBox(true)}>
          <img src={assets.search_icon} alt="" className='w-5 cursor-pointer'/>
          </Link>

          <div className='group relative'>
            <img src={assets.profile_icon} alt="" className='w-5'/>
        
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
              <div className='flex flex-col gap-2 w-36 bg-slate-100 px-5 py-3  rounded'>
               <Link  to="/login" className='cursor-pointer hover:text-black'>My Profile</Link>
               <Link to="/orders" className='cursor-pointer hover:text-black'>Orders</Link>
               <Link to="/logout" className='cursor-pointer hover:text-black'>Logout</Link>
              </div>
            </div>
          </div>

            <Link to="/cart" className='relative'>
              <img 
              src={assets.cart_icon} 
              alt="" 
              className='w-5 min-w-5' />
              <p className='absolute right-[-5px] bottom-[-5px]
              bg-black text-white text-center rounded-full w-4 h-4 leading-4 text-sm'>{getCartCount()}</p>
            </Link>

            <button onClick={()=>setVisible(!visible)}>
              <img src={assets.menu_icon} alt=""  className='w-6 cursor-pointer sm:hidden  '/>
            </button>

            {/* mobile menu  for small*/}
            {visible && ( 
              <ul 
              className='flex flex-col items-center gap-3 capitalize bg-red-500  absolute top-10 bg-gray-100 border p-10 left-0 w-full mt-3 transition-all duration-150 ease-out sm:hidden'>
              {links?.map((link,index)=>{
                return(
                  <li className='relative' key={index}>
                  <NavLink 
                  to={link.href} >
                  <span>{link.label}</span>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden translate-x-2/4'/>
                  </NavLink>
                </li>
                )
              })}
              </ul>)}
       </div>
    </nav>

    </>
  )
}

export default Navbar
