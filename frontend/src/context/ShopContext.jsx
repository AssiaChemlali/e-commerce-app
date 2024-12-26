import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
export const ShopContext=createContext()

export const ShopContextProvider=(props)=>{
  const currency="$"
  const delivery_fee=10
  const [openSearchBox,setOpenSearchBox]=useState(false)
  const [searchValue,setSearchValue]=useState('')
  const [cartItems,setCartItems]=useState([])

  function addToCart(id,size){
    
      const cartItemsCopy=cartItems.slice()
       const index=cartItemsCopy?.findIndex(item=>item.id===id  && item.size===size)

       const productItem=products.find(product=>product._id===id)

      
      if(index!==-1){
       console.log("before update",cartItemsCopy[index].quantity)
            setCartItems(prev=>{
              const updateItems=[...prev]
              updateItems[index].quantity += 1
              console.log("after update",updateItems[index].quantity)
              return updateItems
            })

      }else{
        console.log("add new")
        const item={
          id:id,
          image:productItem.image[0],
          name:productItem.name,
          price:productItem.price,
          size:size,
          quantity:1
        }
        setCartItems(prev=>{
          let cartItemsCopy=[...prev]
          cartItemsCopy=[...cartItemsCopy,item]
          return cartItemsCopy
        })
        // console.log(item)
      } 
        
  }

useEffect(()=>{
//  console.log(cartItems)
},[cartItems])


  const value={
    products,
    currency,
    openSearchBox,
    setOpenSearchBox,
    searchValue,
    setSearchValue,
    cartItems,
    addToCart

  }

  return(
    <ShopContext.Provider value={value}>
            {props.children}
    </ShopContext.Provider>
  )
}