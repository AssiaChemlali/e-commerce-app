import React from 'react'

const Heading = ({ title }) => {
  const words = title.split(" ");
  return (
    <div className='flex flex-col ' >

      <div className='flex items-center  gap-2 mb-2'>
        <h1 className='text-2xl lg:text-2xl uppercase font-medium'>
          <span className='text-slate-500'>{words[0]} </span>
          {words.length > 1 && ` ${words.slice(1).join(" ")}`}
        </h1>
        <span className='h-[2px] w-8 md:w-11 bg-black block'></span>
      </div>



    </div>
  )
}

export default Heading
