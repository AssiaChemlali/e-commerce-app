import React from 'react'

const Form = () => {
  return (
   
      <form className="flex flex-col gap-4  w-2/4	">

        <div className='flex flex-row items-center justify-between  gap-2'>
          <input type="text" name="" id=""
          placeholder='First Name'  className='border py-2 px-3 rounded '/>
          <input type="text" name="" id="" 
           placeholder='Last Name'className='border py-2 px-3 rounded'/>
        </div>

        <input type="email" name="" id=""  placeholder='Email Adress' className='border py-2 px-3 rounded w-full'/>
        <input type="text" name="" id=""   placeholder='Ztreet' className='border py-2 px-3 rounded w-full'/>

        <div  className='flex flex-row items-center gap-2'>
          <input type="text" name="" id=""   placeholder='city' className='border py-2 px-3 rounded w-40'/>
          <input type="text" name="" id=""   placeholder='Ztate' className='border py-2 px-3 rounded w-40'/>
        </div>

        <div  className='flex flex-row items-center gap-2'>
          <input type="number" name="" id=""   placeholder='Zipcode' className='border py-2 px-3 rounded w-40'/>
          <input type="text" name="" id=""  placeholder='Country' className='border py-2 px-3 rounded w-40' />
        </div>

        <input type="number" name="" id=""  placeholder='Phone' className='border py-1 px-3 rounded w-full' />
      </form>
   
  )
}

export default Form
