import React from 'react'
import Heading from '../components/Heading'
import CartTotal from '../components/CartTotal'
import PaymentMethod from '../components/PaymentMethod'
import Form from '../components/Form'
const PlaceOrder = () => {
  return (
    <div className='border-t py-10'>
      <Heading title="DELIVERY INFORMATION"/>
      <div className="pt-5 flex  justify-between gap-5 w-full ">

        <Form/>
        <div className=" w-2/4">
          <CartTotal/>
          <PaymentMethod/>
        </div>

      </div>

    
    </div>
  )
}

export default PlaceOrder
