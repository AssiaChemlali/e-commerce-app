import React, { useContext, useEffect, useState } from 'react'
import Heading from './Heading'
import { ShopContext } from '../context/ShopContext'
const CartTotal = () => {
  const {delivery_fee,cartItems,currency}=useContext(ShopContext)
  const [totalCart,setTotalCart]=useState({
    subtotal:0,
    total:0
  })

  useEffect(()=>{
    calculTotal()
  },[cartItems])

  function calculTotal(){
    if(cartItems.length > 0){
        const subtotal=cartItems?.reduce((result,item)=>result + item.price * item.quantity,0)
        const total=subtotal + delivery_fee
        setTotalCart({subtotal,total})
    }
  }

  return (
    <div className='my-20 sm:w-1/2'>
        <Heading title="CART TOTALS"/>
        <ul className=''>
          <li className='border-b py-2 flex capilatize text-sm'>
            <span> Subtotal</span>
            <span className='ml-auto'>{currency}{totalCart.subtotal}</span>
          </li>
          <li className='border-b py-2 flex capilatize text-sm'>
            <span> Shipping Fee</span>
            <span className='ml-auto'>{currency}{delivery_fee}</span>
          </li>
          <li className='border-b py-2 flex capilatize text-sm '>
            <span className='font-bold'> Total</span>
            <span className='ml-auto font-bold'>{currency}{totalCart.total}</span>
          </li>
        </ul>
        <button className='bg-black text-white py-2 px-5 uppercase text-sm mt-5 '>proceed to checkout</button>
      </div>
  )
}

export default CartTotal
