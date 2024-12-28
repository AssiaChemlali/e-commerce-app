import React from 'react'
import Heading from '../components/Heading'
import { useState } from 'react'
const Login = () => {

  const [currentState, setCurrentState] = useState("Login")
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='flex items-center  flex-col text-center m-auto py-20'>
      <Heading title={currentState} />
      <form onSubmit={handleSubmit} action="" className='inline-flex flex-col items-center w-[90%]  gap-5 mt-5 sm:max-w-96 m-auto'>
        {currentState === 'Sign Up' && <input type="text" name="" id="name" className='border border-black rounded py-2 px-3 w-full ' placeholder='Name' />
        }
        <input type="email" name="" id="email" className='border border-black rounded py-2 px-3 w-full ' placeholder='Email' />
        <input type="password" name="" id="password" className='border border-black rounded py-2 px-3 w-full' placeholder='Password' />
        <p className='gap-3 flex flex-row justify-between text-sm w-full'>
          <button >Forgot Your Password?</button>
          <span
            className='cursor-pointer capitalize ml-auto'
            onClick={() => {
              currentState === 'Login'
                ? setCurrentState('Sign Up')
                : setCurrentState('Login')
            }}>
            {currentState === "Login" ? 'create account' : 'Login here'
            }

          </span>
        </p>
        <button
          className='bg-black text-white py-2 px-5 uppercase text-sm '>{currentState === 'Login' ? 'Sign In' : 'Sign Up'} </button>
      </form>
    </div>
  )
}

export default Login
