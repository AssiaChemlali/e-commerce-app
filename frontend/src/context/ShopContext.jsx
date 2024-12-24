import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext()

export const ShopContextProvider=(props)=>{
  const currency="$"
  const delivery_fee=10
  const value={
    products,
    currency,

  }

  return(
    <ShopContext.Provider value={value}>
            {props.children}
    </ShopContext.Provider>
  )
}