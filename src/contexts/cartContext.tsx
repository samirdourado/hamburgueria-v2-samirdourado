import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./userContext";

interface iCartContext{
    // searchProducts: (evt: iCartProducts) => void
    // addProductToCart: (productData: iCartProducts) => void
    // removeProductFromCart: (productID: iCartProducts) => void
    // removeAllProductsFromCart: (i: iCartProducts) => void
    // calculator: (prices: any) => any
    // counterAdd: (actualSale: any, dataId: any) => void
    // counterSub: (actualSale: any, dataId: any) => void
    // currentSale: iCartProducts
    // filteredProducts: iCartProducts
    // search: iCartProducts
    
    // setSearch: React.Dispatch<React.SetStateAction<iCartProducts>>
    // setCurrentSale: React.Dispatch<React.SetStateAction<iCartProducts[]>>
}

export const CartContext = createContext({} as iCartContext);

interface iCartProviderProps {
    children: React.ReactNode
}

interface iCartProducts{
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
    const [currentSale, setCurrentSale] = useState([] as iCartProducts[])
    const [filteredProducts, setFilteredProducts] = useState([] as iCartProducts[])
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

    const searchProducts = (evt) => {
        {console.log(evt)}
        evt.preventDefault()
        const seachedValue = evt.target.children[0].value.toLowerCase()
        console.log(seachedValue)
        const newList = products.filter(product =>      
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

    const calculator = (prices) => {
        return prices.reduce((acc, act) => {return acc + act.price * act.count}, 0)
    }

    const addProductToCart = (productData: iCartProducts) => {        
        if (!currentSale.some(data => data.id === productData.id)) {
            productData.count = 1
            setCurrentSale([...currentSale, productData])
            toast.success(`Produto adicionado`)
        } else {
            toast.warn(`Produto já adicionado`)
        }
    }

    const removeProductFromCart = (productID: iCartProducts) => {
        const newList = currentSale.filter((data) => data.id !== productID)
        setCurrentSale(newList)
        toast.error(`Produto removido.`)
    }

    const removeAllProductsFromCart = (i: iCartProducts) => {
        const newList = currentSale.filter((data) => data === i)
        setCurrentSale(newList)
        toast.error(`Carrinho vazio, adicione novos produtos para continuar.`)
    }
    

    const counterAdd = (actualSale, dataId) => {
        const cart = actualSale.find(productInCart => productInCart.id === dataId)
        if (actualSale.includes(cart)) {
            cart.count ++
            setCurrentSale([...currentSale])
        }     
    }

    const counterSub = (actualSale, dataId) => {
        const cart = actualSale.find(productInCart => productInCart.id === dataId)
        if (actualSale.includes(cart)) {
            cart.count --
            setCurrentSale([...currentSale])
            if (cart.count === 0) {
            removeProductFromCart(dataId)
            }
        } 
    }

    return(
        <CartContext.Provider value={{ searchProducts, filteredProducts, calculator, addProductToCart,
            currentSale, setCurrentSale, removeProductFromCart, removeAllProductsFromCart, counterAdd, counterSub}}>
            { children }
        </CartContext.Provider>
    )
}