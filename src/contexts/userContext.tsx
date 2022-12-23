import React, { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iLoginFormValues } from "../pages/login"
import { iRegisterFormValues } from "../pages/register"
import { api } from "../services/api"

interface iUserContext {    
    loginUser: (formData: iLoginFormValues) => Promise<void>
    registerNewUser: (formData: iRegisterFormValues) => Promise<void>
    logoutUser: () => void  
    user: iPerson
    products: iProducts
    loading: boolean
    setProducts: React.Dispatch<React.SetStateAction<iProducts>>
}

export const UserContext = createContext({} as iUserContext)

interface iUserProviderProps {
    children: React.ReactNode;
}

interface iPerson {
    accessToken: string;
    userData: iUserData;
}

interface iUserData {
    id: string;
    name: string;
    email: string;
}

interface iRequestError {
    error: string;
}

export interface iProducts{
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
    count: number;
    [element: string | number]: any;    
}

export const UserProvider = ({ children }:iUserProviderProps) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({} as iPerson)
    const [products, setProducts] = useState({} as iProducts)

    const registerNewUser = async (formData: iLoginFormValues) => {
        try {
            setLoading(true)
            const response = await api.post<iPerson>(`users`, formData)            
            toast.success(`Obrigado por cadastrar` )
            navigate("/")
        } catch (error) {
            toast.error("Aoba, algo deu errado!")
            console.log(error)            
        } finally {
            setLoading(false)
        }
    }
    
    const loginUser = async (formData: iLoginFormValues) => {        
        try {
            setLoading(true)
            const response = await api.post<iPerson>(`login`, formData)            
            toast.success(`Tudo certo, autenticando`)
            localStorage.setItem("@BKSD", response.data.accessToken)
            setUser(response.data)            
            navigate("/home")
        } catch (error) {            
            toast.error("Aoba, algo deu errado!")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const logoutUser = () => {
        localStorage.removeItem("@BKSD")
        toast.warn("Volte Logo.")
        navigate("/")
    }

    return(
        <UserContext.Provider value={{user, loginUser, setProducts, loading, registerNewUser, logoutUser, products}}>
            { children }
        </UserContext.Provider>
    )
}