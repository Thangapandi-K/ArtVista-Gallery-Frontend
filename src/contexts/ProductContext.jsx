import { createContext, useState } from "react";

export const productContext = createContext();

const ProductProvider = ({children}) => {

    const [productsL, setProductsL] = useState([]);   

    return (
    <productContext.Provider value={{productsL, setProductsL}}>
        {children}
    </productContext.Provider>
  )
};

export default ProductProvider