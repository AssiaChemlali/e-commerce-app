import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { ToastContainer } from 'react-toastify';
import DescriptionReview from '../components/DescriptionReview';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
  const param = useParams()
  const [product, setProduct] = useState()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [size, setSize] = useState()
  const [image, setImage] = useState()
  const [relatedProducts, setRelatedProducts] = useState([])

  function getProduct() {
    const ProductItem = products.find(item => item._id === param.id)
    setProduct(ProductItem)
    setImage(ProductItem?.image[0])

    let productsCopy = products.slice()
    productsCopy = productsCopy.filter((item) => item.category === ProductItem.category && item.subCategory === ProductItem.subCategory)
    setRelatedProducts(productsCopy.slice(0, 5))

  }

  useEffect(() => {
    getProduct()
  }, [param, products])

  return (
    <>
      <div className='w-full border-t-2 flex  flex-col sm:flex-row gap-10 pt-5 transition-opacity ease-in duration-500'>
        <div className='flex flex-col-reverse sm:flex-row gap-1 sm:gap-2 w-full sm:w-1/2'>
          <div className='flex mt-2 sm:mt-0 sm:flex-col gap-2'>
            {
              product?.image?.map((img, index) => {
                return (<img
                  onClick={() => setImage(img)}
                  key={index}
                  src={img}
                  alt=""
                  className='w-20 cursor-pointer' />)
              })
            }
          </div>

          <div className="w-full h-auto ">
            <img src={image} alt="" className='object-fill	' />
          </div>
        </div>

        <div className='w-full sm:w-1/2 '>
          <h2 className='text-2xl mb-3 font-medium'>{product?.name}</h2>
          <div className='flex gap-3 items-center '>
            <div className="flex gap-1 items-center">
              <img src={assets.star_icon} alt="" className='w-3' />
              <img src={assets.star_icon} alt="" className='w-3' />
              <img src={assets.star_icon} alt="" className='w-3' />
              <img src={assets.star_icon} alt="" className='w-3' />
              <img src={assets.star_dull_icon} alt="" className='w-3' />
            </div>
            <p>(122)</p>


          </div>
          <h4 className='text-2xl font-medium my-5'>{currency}{product?.price}</h4>
          <p className='text-gray-500 text-base mb-4 md:w-4/5'>{product?.description}</p>
          <p className='capitalize'>select size</p>

          <ul className='flex items-center gap-2 my-5'>
            {
              product?.sizes?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setSize(item)}
                    className={`bg-gray-100 py-2 px-4  text-base cursor-pointer border ${size === item ? 'border-orange-500' : ''}`}>{item}</li>
                )
              })
            }
          </ul>

          <button
            onClick={() => addToCart(product._id, size)}
            className='bg-black text-white uppercase py-3 px-5  mt-4 text-sm'>add to cart</button>
          <hr className='mt-8 sm:w-4/5 mb-5' />

          <ul className='text-sm text-gray-500 flex flex-col gap-1 '>
            <li>100% Original product</li>
            <li>Cash on delivery is available on this product</li>
            <li>Easy return and exchange policy within 7 day</li>
          </ul>
        </div>
      </div>

      <DescriptionReview />
      <RelatedProducts relatedProducts={relatedProducts} />
      <ToastContainer theme='light' />
    </>
  )

}

export default Product
