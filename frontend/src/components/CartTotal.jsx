import React, { useContext, useEffect, useState } from 'react'
import Heading from './Heading'
import { ShopContext } from '../context/ShopContext'


const CartTotal = () => {
  const {delivery_fee,currency,getCartAmount}=useContext(ShopContext)

  const {subtotal,total}= getCartAmount()

  return (
    <div className=' w-full'>
        <Heading title="CART TOTALS"/>
        <ul className='mb-5'>
          <li className='border-b py-2 flex capilatize text-sm'>
            <span> Subtotal</span>
            <span className='ml-auto'>{currency} {subtotal}.00</span>
          </li>
          <li className='border-b py-2 flex capilatize text-sm'>
            <span> Shipping Fee</span>
            <span className='ml-auto'>{currency}{delivery_fee}.00</span>
          </li>
          <li className='border-b py-2 flex capilatize text-sm '>
            <span className='font-bold'> Total</span>
            <span className='ml-auto font-bold'>{currency}{total}.00</span>
          </li>
        </ul>

       
      </div>
  )
}

export default CartTotal
