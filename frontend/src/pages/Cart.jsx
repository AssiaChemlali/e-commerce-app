import React, { useContext, useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
const {cartItems}=useContext(ShopContext)
const [cart,setCart]=useState([])

  useEffect(()=>{
    setCart(cartItems)
  },[cartItems])

  console.log(cartItems)
  return (
    <div className='text-left'>
      <Heading title="YOUR CART"/>
      <div className="flex flex-col border-t mt-5">
        {cart?.map((item,index)=>{
          return(
            <div className='flex flex-row  gap-5 py-3 border-b ' key={index}>
                  <img src={item?.image} alt="" className='w-20'/>
                  <div className='w-full flex flex-col justify-start'>
                    <p className='font-semibold mb-4 text-base'>{item.name}</p>
                    <div className='flex  items-center  justify-between '>
                      <span>{item.price}</span>
                      <span className='bg-gray-100 py-2 px-4 border ml-6'>{item.size}</span>
                      <span className='ml-auto mr-auto border py-2 px-4'>{item.quantity}</span>
                      <span className='ml-auto'>delete</span>
                    </div>
                  </div>
            </div>
          )
        })}
      </div>

      <div className='mt-20 sm:w-1/2'>
        <Heading title="CART TOTALS"/>
        <ul className=''>
              <li className='border-b py-2 flex capilatize text-sm'>
                <span> Subtotal</span>
                <span className='ml-auto'>$444</span>
              </li>
              <li className='border-b py-2 flex capilatize text-sm'>
                <span> Shipping Fee</span>
                <span className='ml-auto'>$444</span>
              </li>
              <li className='border-b py-2 flex capilatize text-sm '>
                <span className='font-bold'> Total</span>
                <span className='ml-auto font-bold'>$444</span>
              </li>
        </ul>
      </div>
    </div>
  )
}

export default Cart
