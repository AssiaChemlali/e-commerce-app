import React from 'react'
import Heading from '../components/Heading'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Login = () => {

  const [currentState,setCurrentState]=useState("Login")

  return (
    <div className='flex items-center  flex-col text-center m-auto py-20'>
      <Heading title={currentState}/>
      <form action="" className='flex flex-col w-[90%]  gap-5 mt-5 sm:max-w-96 m-auto'>
        {
          currentState==='Sign Up' && <input type="text" name="" id=""  className='border border-black rounded py-2 px-3 w-full 'placeholder='Name'/>
        }
      
        <input type="email" name="" id=""  className='border border-black rounded py-2 px-3 w-full 'placeholder='Email'/>
        <input type="password" name="" id="" className='border border-black rounded py-2 px-3 w-full' placeholder='Password'/>
        <p className='gap-3 flex flex-row justify-between text-sm'>
          <button>Forgot Your Password?</button>
          <span 
          className='cursor-pointer capitalize'
          onClick={()=>{
            currentState==='Login' 
            ? setCurrentState('Sign Up')
            :setCurrentState('Login')
          }}>
            {
              currentState ==="Login" ? 'create account':'Login here'
            }
           
            </span>
        </p>
        <button 
        onClick={()=>setLogin(true)}
        className='bg-black text-white py-2 px-5 uppercase text-sm '>{currentState} </button>
      </form>
    </div>
  )
}

export default Login
