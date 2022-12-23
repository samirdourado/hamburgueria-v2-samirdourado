import { Container, ContainerHome } from "../../components/container"
import logo from "../../assets/burguer-kenzie.svg"
import { useContext, useEffect, useState } from "react"
import { iProducts, UserContext } from "../../contexts/userContext"
import { CartContext, iCartProducts } from "../../contexts/cartContext"
import { api } from "../../services/api"
import { ActionPanel, ButtonsActionCart, ButtonsActionExit, ButtonsActionFind, Header, Navs, Section } from "./style"
import { ButtonSearch, InputSearch, SearchForm, SearchFormSecret } from "../../components/search/style"
import { BiSearchAlt2 } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import { MdLogout, MdDelete } from "react-icons/md"
import { DataCardBg, FigureCard, FoodCard, FoodImage, MainContent, ProductsList } from "../../components/card/style"
import { ParagraphMini, ParagraphPrice, TitleBold, TitleBoldWhite } from "../../styles/typography"
import { ButtonAddToCart, ButtonLarge, ButtonRemoveFromCart } from "../../components/buttons/style"
import { BackdropModal, CartEmptyBg, CartTypeAmount, Checkout, DataCart, FigureCart, FoodCart, FoodCartHolder, FoodCartWrapper, FoodImageCart, ModalHeader } from "../../components/modal/style"


interface iFunctions {
    filteredProducts: iCartProducts[]
    
}

export interface iSearchFormValues {
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
    count?: number;
    [element: string | number]: any;
}

export const HomePage = () => {
    const { logoutUser, products, setProducts } = useContext(UserContext)

    const { searchProducts, filteredProducts, calculator, addProductToCart, currentSale, 
        removeProductFromCart, removeAllProductsFromCart, counterAdd, counterSub } = useContext(CartContext)

    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState([])    
    const [loading, setLoading] = useState(false)
    const [newSearch, setNewSearch] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem("@BKSD")
        
        if (token) {
            const getApi = async () => {
                try {
                    setLoading(true)                    
                    const response = await api.get<iProducts>(`products`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })                    
                    setProducts(response.data)
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }
            getApi()
        }
    }, [])
    
    return(
        <ContainerHome>
            <Header>
                <Section>
                    <img src={logo}></img>
                    <ActionPanel>
                        <SearchForm noValidate onSubmit={(evt) => searchProducts(evt)}>                    
                            <InputSearch id="searchArea" type={"text"} placeholder="Pesquise aqui."/>
                            <ButtonSearch type="submit"><BiSearchAlt2 size={20}/></ButtonSearch>
                        </SearchForm>

                        {
                            newSearch && 
                                <SearchFormSecret noValidate onSubmit={(evt) => {searchProducts(evt), setNewSearch(false)}}>                    
                                    <InputSearch id="searchArea" type={"text"} placeholder="Pesquise aqui."/>
                                    <ButtonSearch type="submit"><BiSearchAlt2 size={20}/></ButtonSearch>
                                </SearchFormSecret>                            
                        }
                        
                        <Navs>
                            <ButtonsActionFind type="button" onClick={() => setNewSearch(true)}><BiSearchAlt2 size={25}/></ButtonsActionFind>
                            <ButtonsActionCart type="button" onClick={() => setModal(true)}> <FaShoppingCart size={25}/> <span>{currentSale.length}</span> </ButtonsActionCart>
                            <ButtonsActionExit type="button" onClick={() => logoutUser()}><MdLogout size={25}/></ButtonsActionExit>
                        </Navs>
                    </ActionPanel>
                </Section>
            </Header>
                
            <MainContent>                
                <ProductsList>
                    {
                        filteredProducts.length ? (                            
                            filteredProducts.map((element: any) => (
                                <FoodCard key={element.id}>                                    
                                    <FigureCard>
                                        <FoodImage src={element.img}/>
                                    </FigureCard>
                                    <DataCardBg>
                                        <TitleBold>{element.name}</TitleBold>
                                        <ParagraphMini>{element.category}</ParagraphMini>
                                        <ParagraphPrice>{element.price.toFixed(2)}</ParagraphPrice>
                                        <ButtonAddToCart onClick={() => addProductToCart(element)}>Adicionar</ButtonAddToCart>
                                    </DataCardBg>
                                </FoodCard>
                            ))
                        ) : 
                        (products.length &&
                            products.map((element: any) => (
                                <FoodCard key={element.id}>
                                    <FigureCard>
                                        <FoodImage src={element.img}/>
                                    </FigureCard>
                                    <DataCardBg>
                                        <TitleBold>{element.name}</TitleBold>
                                        <ParagraphMini>{element.category}</ParagraphMini>
                                        <ParagraphPrice>R$ {element.price.toFixed(2)}</ParagraphPrice>
                                        <ButtonAddToCart onClick={() => addProductToCart(element)}>Adicionar</ButtonAddToCart>
                                    </DataCardBg>
                                </FoodCard>
                            ))
                        )                                                
                    }
                </ProductsList>                 

                {modal && 
                    <BackdropModal>
                        <div>
                            <ModalHeader>
                                <TitleBoldWhite>Carrinho de Compras</TitleBoldWhite>
                                <button onClick={() => setModal(false)}>X</button>
                            </ModalHeader>
                            {currentSale.length  === 0 ? (
                                <CartEmptyBg>
                                    <h2>Sua sacola está vazia</h2>
                                    <p>Adicione itens</p>
                                </CartEmptyBg>
                            ) : (
                                <>
                                <FoodCartHolder>
                                {
                                    currentSale.map((element: any) => (                                        
                                        <FoodCart key={element.id}>
                                            <FoodCartWrapper>
                                                <FigureCart>
                                                    <FoodImageCart src={element.img}/>
                                                </FigureCart>

                                                <DataCart>
                                                    <TitleBold>{element.name}</TitleBold>
                                                    <CartTypeAmount>
                                                        <button type="button" onClick={() => counterSub(currentSale, element.id)}>-</button>
                                                        <p>{element.count}</p>
                                                        <button type="button" onClick={() => counterAdd(currentSale, element.id)}>+</button>
                                                    </CartTypeAmount>
                                                </DataCart>
                                            </FoodCartWrapper>
                                            <ButtonRemoveFromCart  onClick={() => removeProductFromCart(element.id)}><MdDelete size={20}/></ButtonRemoveFromCart>
                                        </FoodCart>
                                    ))                                    
                                }
                                </FoodCartHolder>
                                    <Checkout>
                                        <div>
                                            <p>Total</p>
                                            <p>R$ {calculator(currentSale).toFixed(2)}</p>
                                        </div>
                                        <ButtonLarge onClick={removeAllProductsFromCart}>Remover Todos</ButtonLarge>
                                    </Checkout>
                                </>
                            )}
                            
                        </div>
                    </BackdropModal>
                }
            </MainContent>
        </ContainerHome>
    )
}