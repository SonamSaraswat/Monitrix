import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import { models } from '../assets/assets';


export const StoreContext=createContext(null);





const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

     const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = models.find((product) => product.id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount;
    }

    const contextValue={
        models,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }




  return (
   <StoreContext.Provider value={contextValue}>
    {props.children}
   </StoreContext.Provider>
  )
}

export default StoreContextProvider