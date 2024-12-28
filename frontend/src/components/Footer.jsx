import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='flex flex-col '>
    <div className='flex flex-col sm:flex-row justify-between gap-5 pt-10 pb-10'>
      <div >
            <img src={assets.logo} alt="forever"  className='w-32'/>
            <p className='w-full text-xs text-gray-600 sm:max-w-[450px] mt-5'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
      </div>

      <div >
        <h2 className='text-xl uppercase text-gray-900 font-medium '>COMPANY</h2>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>
            <Link to="/" className='text-sm text-gray-500'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='text-sm text-gray-500'>About us</Link>
          </li>
          <li>
            <Link to="/" className='text-sm text-gray-500'>Delivery</Link>
          </li>
          <li>
            <Link to="/" className='text-sm text-gray-500'>Privacy policy</Link>
          </li>
        </ul>
      </div>

      
      <div >
        <h2 className='text-xl uppercase text-gray-900 font-medium '>GET IN TOUCH</h2>

        <ul className='flex flex-col gap-1 text-gray-600'>
        <li>
            <a href="/" className='text-sm text-gray-500'>+1-000-000-0000</a>
          </li>
          <li>
            <a href="mailto:greatstackdev@gmail.com" className='text-sm text-gray-500'>greatstackdev@gmail.com</a>
          </li>
          <li>
            <a href="/" className='text-sm text-gray-500'>Instagram</a>
          </li>
        
        </ul>
      </div>
    </div>

     <hr/>
      <div className='w-full m-auto text-center py-5 px-4'>
        <p className='text-sm text-gray-800'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
