import React, { useContext, useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { ShopContext } from '../context/ShopContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const Cart = () => {
  const {cartItems,currency,updateQuantity}=useContext(ShopContext)
  const [cart,setCart]=useState([])

  useEffect(()=>{
    setCart(cartItems)
  },[cartItems])


  return (
    <div className='text-left'>
      <Heading title="YOUR CART"/>
      <div className="flex flex-col border-t mt-5">
        {cart?.map((item,index)=>{

         
          return(
            <div 
            className='flex flex-row  gap-5 py-3 border-b ' 
            key={index}>
                  <img src={item?.image} alt="" className='w-20'/>
                  <div className='w-full flex flex-col justify-start'>
                    <p className='font-medium mb-4 text-base'>{item.name}</p>
                    <div className='flex  items-center  justify-between '>
                      <span> {currency}{item.price}</span>
                      <span className='bg-gray-100 py-2 px-4 border ml-6'>{item.size}</span>
                        <input 
                        className='ml-auto mr-auto border py-2 px-4 w-20 text-dark' 
                        type="number"
                        min={1} 
                        onChange={(e)=>updateQuantity(item.id,item.size,e.target.value)}
                        defaultValue={item.quantity}
                        />
                     
                      <img src={assets.bin_icon} className='ml-auto w-5'/>
                    
                    </div>
                  </div>
            </div>
          )
        })}
      </div>

     <CartTotal  />
    </div>
  )
}

export default Cart
