import React from 'react'

const Form = () => {
  return (
   
      <form className="flex flex-col gap-4  	">
        <div className='flex flex-row items-center justify-between  gap-3'>
          <input type="text" name="" id=""
          placeholder='First Name'  className='border border-gray-300 py-2 px-3 rounded w-full' required/>
          <input type="text" name="" id="" 
           placeholder='Last Name'className='border border-gray-300 py-2 px-3 rounded w-full' required/>
        </div>

        <input type="email" name="" id=""  placeholder='Email Adress' className='border border-gray-300 py-2 px-3 rounded w-full' required/>
        <input type="text" name="" id=""   placeholder='Ztreet' className='border border-gray-300 py-2 px-3 rounded w-full' required/>

        <div  className='flex flex-row items-center gap-2'>
          <input type="text" name="" id=""   placeholder='city' className='border border-gray-300 py-2 px-3 rounded w-full' required/>
          <input type="text" name="" id=""   placeholder='Ztate' className='border border-gray-300 py-2 px-3 rounded w-full' required/>
        </div>

        <div  className='flex flex-row items-center gap-2'>
          <input type="number" name="" id=""   placeholder='Zipcode' className='border border-gray-300 py-2 px-3 rounded w-full' required/>
          <input type="text" name="" id=""  placeholder='Country' className='border border-gray-300 py-2 px-3 rounded w-full' required/>
        </div>

        <input type="number" name="" id=""  placeholder='Phone' className='border border-gray-300 py-1 px-3 rounded w-full' required />
      </form>
   
  )
}

export default Form
