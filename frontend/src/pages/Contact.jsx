import React from 'react'
import Heading from '../components/Heading'
import { assets } from '../assets/assets'
import Newslatter from '../components/Newslatter'
const Contact = () => {
  return (
    <div className='border-t py-10  w-full '>
      <Heading title="CONTACT US" />

      <div className='flex flex-col  items-center justify-center sm:flex-row gap-10 my-10'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
        <ul className="w-full text-left">
          <li className='text-xl font-semibold mb-5 text-gray-600'> Our Store</li>
          <li className=' text-gray-600 text-base mb-5'> 54709 Willms Station
            Suite 350, Washington, USA</li>
          <li className=' text-gray-600 text-base'>Tel: (415) 555-0132</li>
          <li className=' text-gray-600 text-base'>Email: admin@forever.com</li>

          <li className='text-xl font-semibold my-5 text-gray-600'> Careers at Forever</li>
          <li className=' text-gray-600 text-base mb-5'> Learn more about our teams and job openings.</li>
          <li >
            <button className='border border-black py-4 px-6 text-black capitalize hover:bg-black hover:text-white'>Expolore jobs</button>
          </li>
        </ul>
      </div>
      <Newslatter />

    </div>
  )
}

export default Contact
