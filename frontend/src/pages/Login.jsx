import React from 'react'
import Heading from '../components/Heading'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex items-center  flex-col text-center m-auto py-20'>
      <Heading title=" Login"/>
      <form action="" className='flex flex-col w-[450px]  gap-5 mt-5'>
        
        <input type="email" name="" id=""  className='border border-black rounded py-2 px-3 w-full 'placeholder='Email'/>
        <input type="password" name="" id="" className='border border-black rounded py-2 px-3 w-full' placeholder='Password'/>
        <p className='gap-3 flex flex-row justify-between text-sm'>
          <Link>Forgot Your Password?</Link>
          <Link>Create Account</Link>
        </p>
        <button className='bg-black text-white py-2 px-5 uppercase text-sm '>Sign in </button>
      </form>
    </div>
  )
}

export default Login
