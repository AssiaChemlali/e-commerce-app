import React from 'react'
import Heading from '../components/Heading'
import Newslatter from '../components/Newslatter'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div className='border-t py-10 text-center m-auto'>
     <Heading title="ABOUT US"/>
     <div className='flex flex-row gap-10 mt-10'>
      <div className="w-full sm:w-1/2">
          <img src={assets.about_img} alt=""  className='object-cover w-full h-full'/>
      </div>
      <div className="w-full sm:w-1/2 text-base text-gray-600 flex gap-4 flex-col text-left">
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
         <p>
         Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
         </p>
         <h6 className='font-bold text-black'>Our Mission</h6>
         <p>
         Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
         </p>
      </div>
     </div>

      <div className='my-20'>
        <Heading title="WHY CHOOSE US" />
        <div className='flex mt-10'>

          <div className='p-16 border text-left'>
            <h6 className='font-bold mb-5'>Quality Assurance:</h6>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='p-16 border text-left'>
            <h6 className='font-bold mb-5'>Convenience:
            </h6>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='p-16 border text-left'>
            <h6 className='font-bold mb-5'>Exceptional Customer Service:</h6>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
        </div>
      </div>
      <Newslatter/>

    </div>
  )
}

export default About
