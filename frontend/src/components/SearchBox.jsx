import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const SearchBox = () => {
  const {setOpenSearchBox,setSearchValue}=useContext(ShopContext)


  return (
    <div className='bg-gray-100 py-10 px-10 w-full border  flex  items-center justify-center gap-3'>

    <input type="text" name="" id="search"  className='w-[450px] rounded-full  p-2 border px-5 text-sm  outline-none' placeholder='Search' onChange={(e)=>setSearchValue(e.target.value)}/>

    <img 
    className='w-4 text-gray-600 cursor-pointer' onClick={()=>setOpenSearchBox(false)} 
    src={assets.cross_icon}/>

    </div>
  )
}

export default SearchBox
