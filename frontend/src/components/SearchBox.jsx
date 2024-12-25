import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBox = () => {
  const {setOpenSearchBox,setSearchValue}=useContext(ShopContext)
  return (
    <div className='bg-gray-100 py-5 w-full border-t border-b flex  items-center justify-center gap-3'>
    <input type="text" name="" id="search"  className=' rounded-full  p-2 border px-5 text-base w-2/3' placeholder='Search' onChange={(e)=>setSearchValue(e.target.value)}/>
    <span className='text-2xl text-gray-600 cursor-pointer' onClick={()=>setOpenSearchBox(false)}>x</span>
    </div>
  )
}

export default SearchBox
