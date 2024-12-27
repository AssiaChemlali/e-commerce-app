import React, { useContext, useEffect, useState } from 'react'
import Heading from './Heading'
import { ShopContext } from '../context/ShopContext'

import { Link } from 'react-router-dom'
const CartTotal = () => {
  const {delivery_fee,currency,getCartAmout}=useContext(ShopContext)


  return (
    <div className='my-20 w-full'>
        <Heading title="CART TOTALS"/>
        <ul className='mb-5'>
          <li className='border-b py-2 flex capilatize text-sm'>
            <span> Subtotal</span>
            <span className='ml-auto'>{currency} {getCartAmout().subtotal}.00</span>
          </li>
          <li className='border-b py-2 flex capilatize text-sm'>
            <span> Shipping Fee</span>
            <span className='ml-auto'>{currency}{delivery_fee}.00</span>
          </li>
          <li className='border-b py-2 flex capilatize text-sm '>
            <span className='font-bold'> Total</span>
            <span className='ml-auto font-bold'>{currency}{getCartAmout().total}.00</span>
          </li>
        </ul>

        <Link 
        to='/place-order'
        className='bg-black text-white py-2 px-5 uppercase text-sm  '>proceed to checkout</Link>
      </div>
  )
}

export default CartTotal
