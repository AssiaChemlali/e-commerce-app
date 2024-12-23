import React from 'react'
import { products } from '../assets/assets'
import ProductItem from './ProductItem'
const ListProducts = () => {
  return (
    <div className='grid sm:grid-cols-4 gap-5'>
      {products.slice(0,10).map((product,index)=>{
        return(
         <ProductItem 
         key={index} 
         product={product}/>

        )
      })}
    </div>
  )
}

export default ListProducts
