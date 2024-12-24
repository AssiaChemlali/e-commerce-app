import React, { useContext, useEffect, useState } from 'react'
import Heading from './Heading'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const BestSellers = () => {
  const {products}=useContext(ShopContext)
  const [bestSellers,setBestSellers]=useState([])

  useEffect(()=>{
    const bestSellersProducts= products.filter((item)=> item.bestseller )
    setBestSellers(bestSellersProducts)
  },[])

  return (
    <div className='flex  flex-col items-center'>
      <Heading  title="BEST SELLERS"/>
      <p className='text-base text-gray-600 text-center w-3/4 m-auto mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>


      <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 lg:grid-cols-5'>
        {bestSellers.map((product,index)=>{
          return(
          <ProductItem 
          key={index} 
          product={product}/>
          )
        })}
      </div>
    </div>
  )
}

export default BestSellers
