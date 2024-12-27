import React from 'react'
import Heading from '../components/Heading'
import CartTotal from '../components/CartTotal'
import PaymentMethod from '../components/PaymentMethod'
import Form from '../components/Form'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {
  return (
    <div className='border-t py-10'>
      <Heading title="DELIVERY INFORMATION"/>
      <div className="pt-5 flex  gap-5 w-full">

        <Form/>
        <div className="w-2/4">
          <CartTotal/>
          <PaymentMethod/>
           <Link 
            to='/orders'
            className='bg-black text-white py-2 px-5 uppercase text-sm'>place order</Link>
        </div>

      </div>

    
    </div>
  )
}

export default PlaceOrder
