import React from 'react'

const Newslatter = () => {
  function handleSubmit(event){
    event.preventDefault()

  }
  return (
    <div className='text-center m-auto mb-10'>

      <h2 className='text-gray-800 text-2xl mb-3 font-semibold font-medium'>Subscribe now & get 20% off</h2>
      <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <form  className='mt-5 flex justify-center' onSubmit={handleSubmit}>
        <input type="email" name="" id="" placeholder='Enter your email' className='w-full sm:w-1/2  border py-2 px-4 h-12 outline-none'/>
        <button type="submit" className='bg-black text-white uppercase py-2 px-8 text-xs h-12'>subscribe</button>
      </form>
      
    </div>
  )
}

export default Newslatter
