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
        <div className="w-full sm:w-[480px]">
          <Heading title="DELIVERY INFORMATION"/>
          <Form/>
        </div>
        
        <div className="min-w-80">
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
