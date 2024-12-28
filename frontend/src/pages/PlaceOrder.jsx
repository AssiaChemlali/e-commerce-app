import React from 'react'
import Heading from '../components/Heading'
import CartTotal from '../components/CartTotal'
import PaymentMethod from '../components/PaymentMethod'
import Form from '../components/Form'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {
  return (
    <div className='border-t py-10 min-h-[80vh]'>
      <div className="pt-5 flex flex-col sm:flex-row gap-5 w-full">
        <div className="w-full sm:w-1/2">
          <Heading title="DELIVERY INFORMATION" />
          <Form />
        </div>

        <div className="w-full sm:w-1/2 ">
          <CartTotal />
          <PaymentMethod />
          <Link
            to='/orders'
            className='bg-black text-white py-2 px-5 uppercase text-sm'>place order</Link>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
