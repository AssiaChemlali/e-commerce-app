import React from 'react'
import {assets} from "../assets/assets"
const Header = () => {
  return (
    <div className='border border-gray-400 flex flex-col sm:flex-row '>

       <div className='w-full sm:w-1/2 flex flex-col items-center text-left justify-center py-10 sm:py-0'>
        <div className='p-10'>
            <p className='flex  items-center gap-x-2'>
              <span className='h-[2px] w-8 md:w-11 bg-black block'></span>
              <span className='uppercase font-semibold'>Our bestsellers</span>
            </p>

            <h1 className='text-3xl lg:text-5xl my-4 capitalize prata-regular leading-relaxed'>latest arrivals</h1>

            <p className='flex  items-center gap-x-2'>
              <span className='uppercase font-semibold text-sm'>shop now</span>
              <span className='h-[2px] w-[20px] bg-black block'></span>
            </p>

        </div>
       </div>

       <div className='sm:w-1/2'>
         <img src={assets.hero_img} alt="" />
       </div>

    </div>
  )
}

export default Header
