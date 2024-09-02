import { createContext, useEffect, useState } from "react";
import { cartServices } from "../services/cartServices";

export const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cartL, setCartL] = useState([])
    const [cartCount, setCartCount] = useState(0);

    return (
    <cartContext.Provider value={{cartL, setCartL, cartCount, setCartCount}}>
        {children}
    </cartContext.Provider>
  )
};

export default CartProvider;