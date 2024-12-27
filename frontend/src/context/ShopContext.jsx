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
 
  if (size) {
    const index = cartItems.findIndex(item => item.id === id && item.size === size);

    const productItem = products.find(product => product._id === id);
    if (index !== -1) {
      setCartItems(prev => {
        const updatedItems = [...prev];
        updatedItems[index]={
          ...updatedItems[index],
          quantity:updatedItems[index].quantity +1
        }
        
        return updatedItems;
      });
    } else if (productItem) {
      const newItem = {
        id: id,
        image: productItem.image[0],
        name: productItem.name,
        price: productItem.price,
        size: size,
        quantity: 1,
      };
      setCartItems(prev => [...prev, newItem]);
    }
  } else {
    toast.error("Select Product size", {
      position: "top-right",
    });
  }
  }

  function updateQuantity(id,size,quantity){
    const index = cartItems.findIndex(item => item.id === id && item.size === size);

    if (index !== -1) {
      setCartItems(prev => {
        const updatedItems = [...prev];
        updatedItems[index]={
          ...updatedItems[index],
          quantity:parseInt(quantity)
        }

        return updatedItems;
      });
    }





  }

  const getCartCount=()=>{
    const totalQuantity=cartItems.reduce((result,item)=>result + item.quantity,0)
    return totalQuantity
  }

  useEffect(()=>{
  },[cartItems])


  const value={
    products,
    currency,
    openSearchBox,
    setOpenSearchBox,
    searchValue,
    setSearchValue,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    delivery_fee

  }

  return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}