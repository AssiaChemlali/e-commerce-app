import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Heading from './Heading'

const LatestCollections = () => {
  const {products}=useContext(ShopContext)
  const [latestProduct,setLatestProduct]=useState([])

  useEffect(()=>{
      setLatestProduct(products.slice(0,10))
  },[])

  return (
<div className='flex  flex-col items-center my-10'>
    <Heading  title="LATEST COLLECTIONS"/>
    <p className='text-base text-slate-700  text-center w-[500px] mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>


    <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 lg:grid-cols-5'>
      {latestProduct.map((product,index)=>{
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

export default LatestCollections
