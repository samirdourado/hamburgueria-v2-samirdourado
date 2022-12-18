import { createContext } from "react";
import { useNavigate } from "react-router-dom";

interface iCartContext{

}

export const CartContext = createContext({})

interface iProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }:iProps) => {

    const navigate = useNavigate()

    return(
        <CartContext.Provider value={{}}>
            { children }
        </CartContext.Provider>
    )
}