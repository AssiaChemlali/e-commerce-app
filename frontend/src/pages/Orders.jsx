import React, { useContext } from 'react'
import Heading from '../components/Heading'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const {products}=useContext(ShopContext)
   
  return (
    <div className='border-t py-10'>
       <Heading title="MY ORDERS"/>
       <div className="">
            {products.slice(0,4).map((product)=>{
              return(
                <div className='flex flex-row gap-5 mb-5 border-b pb-5 items-center cursor-pointer'>
                  <img src={product.image[0]} alt="" className='w-20 ' />
                  <div className=''>
                    <p className='font-medium '>{product.name}</p>
                    <p className='flex  gap-3 text-sm my-2'>
                      <span>${product.price}</span>
                      <span>Quantity:1</span>
                      <span>Size: {product.size}</span>
                    </p>
                   
                    <p className='text-sm'>Date : <span className='text-gray-400'>{product.date}</span></p>
                  </div>

                  <p className='ml-auto mr-auto flex items-center gap-1'>
                    <span className='w-2 h-2 bg-green-500 rounded-full block '></span>
                    <span>Ready to Ship</span>
                  </p>
                  <button className='py-2 px-3 border  rounded '>
                    Track Order
                  </button>
                 

                </div>
              )
            })}
       </div>
    </div>
  )
}

export default Orders
