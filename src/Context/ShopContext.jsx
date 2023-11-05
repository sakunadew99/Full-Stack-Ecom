import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let index=0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const contexValue = {all_product};

    const [cartItems,setCartItem] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log(cartItems);
    }


    const contextValue = {all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;