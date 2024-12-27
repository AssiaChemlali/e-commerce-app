import React from 'react'
import { Link } from 'react-router-dom'
const ProductItem = ({product}) => {
  return (
    <Link 
    to={`/product/${product._id}`} 
    className='cursor-pointer' 
    key={product.id}>
        <img src={product.image[0]} alt="" />
        <p className='text-sm my-2'>{product.name}</p>
        <p className='font-semibold text-sm'>{product.price} $</p>
    </Link>
  )
}

export default ProductItem
