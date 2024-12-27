import React from 'react'
import Heading from './Heading'
import { assets } from '../assets/assets'
const PaymentMethod = () => {
  return (
    <div className='my-10'>
      <Heading title="PAYMENT METHOD"/>
       

        <form className='flex gap-2 flex-col mt-5'>
          <p className='flex items-center gap-5 border py-2 px-4'>
            <input type="radio" name="payment" id="stripe" />
            <label for="stripe"><img src={assets.stripe_logo} alt="" className='w-12'/>
            </label>
          </p>
          <p className='flex items-center gap-5 border py-2 px-4'>
            <input type="radio" name="payment" id="stripe" />
            <label for="stripe"><img src={assets.razorpay_logo} alt="" className='w-16'/>
            </label>
          </p>
          <p className='flex items-center gap-5 border py-2 px-4'>
            <input type="radio" name="payment" id="stripe" checked/>
            <label for="stripe" className='uppercase text-sm'>cash on delivery
            </label>
          </p>
      

        </form>
    </div>
  )
}

export default PaymentMethod
