import React, { useContext } from 'react'
import Heading from "../components/Heading"
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
const Collection = () => {
  const {products}=useContext( ShopContext)
  const [collection,setCollection]=useState([])
  const[sort,setSort]=useState('relavent')
  function handleChange(){

  }
  useEffect(()=>{
     setCollection(products)
  },[])

  function handleSelect(event){
      const sort= event.target.value
      console.log(sort)
      if(sort==="high"){
        let items = products;
        items.sort((a, b) => b.price - a.price);
        setCollection(items)
      } else if(sort==="low"){
        let items = products;
        items.sort((a, b) => a.price - b.price);
        setCollection(items)
      } else if(sort==="relavent"){
        setCollection(products)
      }

      console.log(collection[0].price)
  }

  return (
    <div className=''>
      <hr className='mb-5 pt-10'/>
      <div className='flex gap-7 justify-between'>
        {/* fiters */}

        <div className='w-1/3'>
          <h2 className='uppercase mb-5 text-xl'>Filters</h2>
          <div className='border flex flex-col p-5 mb-5'>
            <p className='uppercase text-base mb-4 font-medium'>CATEGORIES</p>

            <label className='text-gray-500 flex gap-2 font-normal text-sm'>
              <input type="checkbox" onChange={handleChange} className=''/>
            Men
            </label>

            <label className='text-gray-500 flex gap-2 font-normal text-sm'>
              <input type="checkbox" onChange={handleChange}/>
            Women
            </label>

            <label className='text-gray-500 flex gap-2 font-normal text-sm'>
              <input type="checkbox" onChange={handleChange}/>
            Kids
            </label>

          </div>

          <div className='border flex flex-col p-5'>
            <p className='uppercase text-base mb-4 font-medium'>TYPE</p>

            <label className='text-gray-500 flex gap-2 font-normal text-sm'>
              <input type="checkbox" onChange={handleChange} className=''/>
              Topwear
            </label>

            <label className='text-gray-500 flex gap-2 font-normal text-sm'>
              <input type="checkbox" onChange={handleChange}/>
              Bottomwear
            </label>

            <label className='text-gray-500 flex gap-2 font-normal text-sm'>
              <input type="checkbox" onChange={handleChange}/>
              Winterwear
            </label>

          </div>
        </div>

        {/* collections */}
        <div className='w-full mb-10'>
            <div className='flex flex-row justify-between'>
            <Heading title="ALL COLLECTIONS"/>

              <select name="sort" id="" className='border py-0' onChange={handleSelect}>
                <option value="relavent">sort by:Relavent</option>
                <option value="low">sort by:Low to high</option>
                <option value="high">sort by:High to Low</option>
              </select>
            </div>
            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
               {
                collection.map((item,index)=>{
                  return(
                 <ProductItem 
                 product={item} 
                 key={index}/>
                  )
                })
               }
            </div>
          
        </div>

      </div>

    </div>
 
  )
}

export default Collection
