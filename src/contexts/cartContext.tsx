import { createContext, FormEvent, useContext, useEffect, useState, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./userContext";

export interface iCartContext{
    searchProducts: (evt: FormEvent<HTMLFormElement>) => void
    addProductToCart: (productData: iCartProducts) => void    
    removeProductFromCart: (productID: iCartProducts) => void
    removeAllProductsFromCart: () => void
    calculator: (prices: iCartProducts[]) => any
    counterAdd: (actualSale: iCartProducts[], dataId: number) => void
    counterSub: (actualSale: iCartProducts[], dataId: number) => void
    
    
    filteredProducts: iCartProducts[]    
    setFilteredProducts: React.Dispatch<React.SetStateAction<iCartProducts[] | []>>

    currentSale: iCartProducts[]     
}

export const CartContext = createContext({} as iCartContext);

interface iCartProviderProps {
    children: React.ReactNode
}

export interface iCartProducts{
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
    count?: number;
    [element: string | number]: any;    
}

export const CartProvider = ({ children }:iCartProviderProps) => {

    const navigate = useNavigate()

    const { products } = useContext(UserContext)
    
    const localStorageProducts = localStorage.getItem(`@BKSD`)

    // const [modal, setModal] = useState(false)
    // const [loading, setLoading] = useState(false)
    const [currentSale, setCurrentSale] = useState<iCartProducts[] | []>([])
    const [filteredProducts, setFilteredProducts] = useState<iCartProducts[] | []>([])
    const [search, setSearch] = useState("")
    
    
    
    // useEffect(() => {
    //     localStorage.setItem(`@BKSD`, JSON.stringify(currentSale))
    //   }, [currentSale])
    
    useEffect(() => {
        if (search.length) {
          setFilteredProducts(products.filter((product: iCartProducts) => 
            product.name.toLowerCase().includes(search)
            || product.category.toLowerCase().includes(search)
          ))
        }
      }, [search])

    const searchProducts = (evt: FormEvent<HTMLFormElement>) => {
        {console.log(evt)}
        evt.preventDefault()        
        const element = evt.currentTarget.children[0] as HTMLInputElement
        const seachedValue = element.value.toLowerCase()
        console.log(seachedValue)
        const newList = products.filter((product: { name: string; category: string; }) =>      
            product.name.toLowerCase().includes(seachedValue)
            || product.category.toLowerCase().includes(seachedValue)
            )

            if (!seachedValue) {
            toast.warn("Campo de busca vazio")
            }

            if (!newList.length) {
            toast.warn("Produto não encontrado")
            }
            console.log(newList)
        return setFilteredProducts(newList)
    }

    const calculator = (prices: iCartProducts[]) => {
        return prices.reduce((acc, act) => {return acc + act.price * (act.count || 0)}, 0)
    }

    const addProductToCart = (productData: iCartProducts) => {        
        if (!currentSale.some((data: { id: number; }) => data.id === productData.id)) {
            productData.count = 1
            setCurrentSale([...currentSale, productData])
            toast.success(`Produto adicionado`)
        } else {
            toast.warn(`Produto já adicionado`)
        }
    }

    const removeProductFromCart = (productID: any) => {
        const newList = currentSale.filter((data) => data.id !== productID)
        setCurrentSale(newList)
        toast.error(`Produto removido.`)
    }

    const removeAllProductsFromCart = () => {        
        setCurrentSale([])
        toast.error(`Carrinho vazio, adicione novos produtos para continuar.`)
    }
    

    const counterAdd = (actualSale: iCartProducts[], dataId: number) => {
        const cart = actualSale.find((productInCart) => productInCart.id === dataId)
        if (cart) {
            if (cart.count) {
                cart.count ++
                setCurrentSale([...currentSale])
            }
        }     
    }

    const counterSub = (actualSale: iCartProducts[], dataId: number) => {
        const cart = actualSale.find((productInCart) => productInCart.id === dataId)
        // if (actualSale.includes(cart)) {
        if (cart) {
            if (cart.count) {
                cart.count --
                setCurrentSale([...currentSale])
            }
            if (cart.count === 0) {
            removeProductFromCart(dataId)
            }
        } 
    }

    return(
        <CartContext.Provider value={{ searchProducts, filteredProducts, setFilteredProducts, calculator, addProductToCart,
            currentSale, removeProductFromCart, removeAllProductsFromCart, counterAdd, counterSub}}>
            { children }
        </CartContext.Provider>
    )
}   