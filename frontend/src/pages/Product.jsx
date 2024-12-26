import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { ToastContainer, toast } from 'react-toastify';
const Product = () => {
  const param=useParams()
  const [product,setProduct]=useState()
  const {products}=useContext(ShopContext)
  const [size,setSize]=useState()

  function getItem(){
     const item=products.find(item=>item._id===param.id)
     setProduct(item)
  }

  useEffect(()=>{
    getItem()
  },[param])

  function handleAddToCart(){
    if(size){
     
    }else{
      toast.error("Select Product size", {
        position: "top-right",
      });
    }
  }




  return (
    <div className='border-t flex gap-10 pt-10'>
      <ToastContainer theme='light' />
     <div className='flex gap-5 w-1/2'>
        <div className=''>
          {
            product?.image?.map((img)=>{
              return(<img src={img} alt=""  className='w-20'/>)
            })
          }
        </div>

        <div className="">
            <img src={product?.image} alt="" />
        </div>
     </div>

     <div className='w-1/2 '>
        <h2 className='text-2xl mb-3 font-medium'>{product?.name}</h2>
        <div className='flex gap-3 items-center '>
          <div className="flex gap-1">
          <img src={assets.star_icon} alt=""  className='w-3'/>
          <img src={assets.star_icon} alt=""  className='w-3'/>
          <img src={assets.star_icon} alt=""  className='w-3'/>
          <img src={assets.star_icon} alt=""  className='w-3'/>
          <img src={assets.star_dull_icon} alt=""  className='w-3'/>
          </div>
          <p>(122)</p>
        
        
        </div>
        <h4 className='text-2xl font-semibold my-5'>${product?.price}</h4>
        <p className='text-gray-500 text-base mb-4'>{product?.description}</p>
        <p className='capitalize'>select size</p>

        <ul className='flex items-center gap-2 my-5'>
          {
            product?.sizes?.map((item)=>{return(
              <li 
              onClick={()=>setSize(item)}
              className={`bg-gray-100 py-1 px-3 border text-base cursor-pointer ${size===item ? 'border-red-500':''}`}>{item}</li>
            )})
          }
        </ul>

        <button 
        onClick={handleAddToCart}
        className='bg-black text-white uppercase py-3 px-5  mt-4 text-sm'>add to cart</button>
        <hr  className='mt-8 mb-5'/>

        <ul className='text-sm text-gray-400  '>
          <li>100% Original product</li>
          <li>Cash on delivery is available on this product</li>
          <li>Easy return and exchange policy within 7 day</li>
        </ul>
     </div>
    </div>
  )
}

export default Product
