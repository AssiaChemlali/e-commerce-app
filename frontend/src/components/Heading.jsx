import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div className='py-10 flex flex-col items-center' >

      <div className='flex items-center justify-center gap-2 mb-5'>
         <h1 className='text-3xl lg:text-5xl uppercase'>
          <span className='text-slate-500'>{title.split(" ")[0]} </span>
          {title.split(" ")[1]} </h1>
         <span className='h-[2px] w-8 md:w-11 bg-black block'></span>
      </div>

      <p className='text-base text-slate-700 w-[600px] text-center'>{subtitle}</p>
      
    </div>
  )
}

export default Heading
