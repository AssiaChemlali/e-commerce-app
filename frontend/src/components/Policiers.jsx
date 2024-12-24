import React from 'react'
import { assets } from '../assets/assets'

 const policiersData=[
  {
    image:assets.exchange_icon,
    title:'Easy Exchange Policy',
    desc:'We offer hassle free exchange policy'
  },
  {
    image:assets.quality_icon,
    title:'7 Days Return Policy',
    desc:'We provide 7 days free return policy'
  },
  {
    image:assets.support_img,
    title:'Best customer support',
    desc:'we provide 24/7 customer support'
  },

 ]
const Policiers = () => {
  return (
    <div className='py-20 grid sm:grid-cols-3'>
      {
        policiersData.map((policy,index)=>{
          return(
            <div className='text-center' key={index}>
              <img src={policy.image} alt="" className='w-10 m-auto object-cover' />
              <h6 className='font-bold text-base mt-4 text-gray-700'>{policy.title}</h6>
              <p className='text-base text-gray-400'>{policy.desc}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default Policiers
