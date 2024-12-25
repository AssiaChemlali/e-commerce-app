import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
export const ShopContext=createContext()

export const ShopContextProvider=(props)=>{
  const currency="$"
  const delivery_fee=10
  const [openSearchBox,setOpenSearchBox]=useState(false)
  const [searchValue,setSearchValue]=useState('')

  const value={
    products,
    currency,
    openSearchBox,
    setOpenSearchBox,
    searchValue,
    setSearchValue

  }

  return(
    <ShopContext.Provider value={value}>
            {props.children}
    </ShopContext.Provider>
  )
}