import React, { useContext } from 'react'
import Heading from "../components/Heading"
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import SearchBox from '../components/SearchBox'
const Collection = () => {
  const {
    products,
    searchValue,
    setOpenSearchBox,
    openSearchBox}=useContext(ShopContext)


  const [collection,setCollection]=useState([])

  const[sortBy,setSortBy]=useState('relavent')

  const[category,setCategory]=useState([])
  const[type,setType]=useState([])

  function applyFilter(){
    let items=[...products]

    if(searchValue ){
        items=items.filter(item=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
    } 
    
    if(category.length > 0){
      items= items.filter((item)=>category.includes(item.category))
     
    }

    if(type.length > 0){
      items= items.filter((item)=>type.includes(item.subCategory))
    
    }
    setCollection(items)
  }

  function sortProducts(){
    let items=[...collection]

    if(sortBy==="high-low"){
      setCollection(items.sort((a, b) => b.price - a.price))
    } else if(sortBy==="low-high"){
        setCollection(items.sort((a, b) => a.price - b.price))
    } else{
       applyFilter()
    }
  }

  useEffect(()=>{
   applyFilter() 
 },[category,type,searchValue])


  useEffect(()=>{
    sortProducts()
  },[sortBy])



  function handleSelect(event){
      setSortBy(event.target.value)     
  }

  function handleCategory(cat){
    if(category.includes(cat)){
      setCategory(prevCategory=> prevCategory.filter((item)=>item!==cat)
      )
    }else{
      setCategory(prevCategory=>[...prevCategory,cat])
    }
  }

  function handleType(subCategory){
    if(type.includes(subCategory)){
      setType(prev=> prev.filter((item)=>item!==subCategory)
      )
    }else{
      setType(prev=>[...prev,subCategory])
    }
  }


  return (
    
     <>
     { openSearchBox && <SearchBox/>}
    <div className='flex flex-col sm:flex-row gap-7 justify-between border-t pt-10'>
      {/* fiters */}

      <div className='w-full sm:w-1/3'>
        <h2 className='uppercase mb-5 text-xl  cursor-pointer'>Filters</h2>

        <div className='border flex flex-col p-5 mb-5'>
          <p className='uppercase text-sm mb-4 font-medium'>CATEGORIES</p>

          <label className='text-gray-700 flex gap-2 font-light text-sm'>
            <input 
            type="checkbox" 
            onChange={()=>handleCategory('Men')} className=''/>
          Men
          </label>

          <label className='text-gray-500 flex gap-2 font-light text-sm'>
            <input type="checkbox" 
            onChange={()=>handleCategory('Women')}/>
          Women
          </label>

          <label className='text-gray-500 flex gap-2 font-light text-sm'>
            <input type="checkbox" onChange={()=>handleCategory('Kids')}/>
          Kids
          </label>

        </div>

        <div className='border flex flex-col p-5'>
          <p className='uppercase text-base mb-4 font-medium'>TYPE</p>

          <label className='text-gray-500 flex gap-2 font-normal text-sm'>
            <input type="checkbox" onChange={()=>handleType('Topwear')}  className=''/>
            Topwear
          </label>

          <label className='text-gray-500 flex gap-2 font-normal text-sm'>
            <input type="checkbox" onChange={()=>handleType('Bottomwear')} />
            Bottomwear
          </label>

          <label className='text-gray-500 flex gap-2 font-normal text-sm'>
            <input type="checkbox" onChange={()=>handleType('Winterwear')}/>
            Winterwear
          </label>

        </div>
      </div>

      {/* collections */}
      <div className='w-full mb-10 flex-1'>
          <div className='flex flex-row justify-between'>
          <Heading title="ALL COLLECTIONS"/>

          <select name="sort" id="" className='border py-0' onChange={handleSelect}>
            <option value="relavent">sort by:Relavent</option>
            <option value="low-high">sort by:Low to high</option>
            <option value="high-low">sort by:High to Low</option>
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

    </>
  )
}

export default Collection
