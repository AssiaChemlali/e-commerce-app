import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Initialize cartItems from localStorage or default to an empty array
  const [cartItems, setCartItems] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return Array.isArray(cart) ? cart : [];
  });

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id, size) => {
    if (!size) {
      toast.error("Select Product size", {
        position: "top-right",
      });
      return;
    }

    const index = Array.isArray(cartItems)
      ? cartItems.findIndex((item) => item.id === id && item.size === size)
      : -1;

    const productItem = products.find((product) => product._id === id);
    if (index !== -1) {
      setCartItems((prev) => {
        const updatedItems = [...prev];
        updatedItems[index] = {
          ...updatedItems[index],
          quantity: updatedItems[index].quantity + 1,
        };
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
      setCartItems((prev) => [...prev, newItem]);
    }
  };

  const updateQuantity = (id, size, quantity) => {
    if (!Array.isArray(cartItems)) return;

    const index = cartItems.findIndex((item) => item.id === id && item.size === size);
    if (index !== -1) {
      setCartItems((prev) => {
        const updatedItems = [...prev];
        updatedItems[index] = {
          ...updatedItems[index],
          quantity: parseInt(quantity, 10), // Ensure quantity is a number
        };
        return updatedItems;
      });
    }
  };

  const getCartCount = () => {
    if (!Array.isArray(cartItems) || cartItems.length === 0) return 0;

    return cartItems.reduce((result, item) => result + item.quantity, 0);
  };

  const getCartAmount = () => {
    let subtotal = 0;
    let total = 0;

    if (Array.isArray(cartItems) && cartItems.length > 0) {
      subtotal = cartItems.reduce((result, item) => result + item.price * item.quantity, 0);
      total = subtotal + delivery_fee;
    }

    return { subtotal, total };
  };


  const removeFromCart=(id,size)=>{
    console.log(cartItems)
    const carts=cartItems.filter((item)=> item.id!==id && item.size!==size)
    console.log(id,carts)
    // setCartItems()

  }

  const value = {
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
    delivery_fee,
    getCartAmount,
    removeFromCart
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};
