import { createContext } from "react";

export const CartContext = createContext({})

interface iProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }:iProps) => {

    return(
        <CartContext.Provider value={{}}>
            { children }
        </CartContext.Provider>
    )
}