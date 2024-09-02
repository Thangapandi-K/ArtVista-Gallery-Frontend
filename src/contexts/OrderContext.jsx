import { createContext, useState } from "react";


export const orderContext = createContext();

const OrderProvider = ({ children }) => {

    const [orderL, setOrderL] = useState([]);

    return (
    <orderContext.Provider value={{orderL, setOrderL}}>
        {children}
    </orderContext.Provider>
    )
};

export default OrderProvider;