import React from 'react'
import Heading from './Heading'
import ProductItem from './ProductItem'
const RelatedProducts = ({relatedProducts}) => {
  return (
    <div className="mt-20">
    <Heading title="RELATED PRODUCTS"/>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6'>
      {relatedProducts.map((item,index)=>{
        return(
          <ProductItem key={index} product={item}/>
        )
      })}
    </div>
  </div>
  )
}

export default RelatedProducts
