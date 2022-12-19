import { Container } from "../../components/container"
import logo from "../../assets/burguer-kenzie.svg"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/userContext"
import { CartContext } from "../../contexts/cartContext"

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
    const { user, logoutUser, products } = useContext(UserContext)

    const { searchProducts, filteredProducts, calculator, addProductToCart, currentSale, setCurrentSale,
        removeProductFromCart, removeAllProductsFromCart, counterAdd, counterSub } = useContext(CartContext)

    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState([])    
    
    return(
        <Container>
            <header>
                <img src={logo}></img>
                <div>
                    <form onSubmit={(evt) => searchProducts()}>
                        <input id="searchArea" type={"text"} placeholder="Pesquise aqui."/>
                        <button type="submit">Pesquisar</button>
                    </form>
                    <div>
                        <button type="button"> LupaMobile </button>
                        <button type="button" onClick={() => setModal(true)}> Cart {currentSale.length} </button>
                        <button type="button" onClick={() => logoutUser()}> Sair </button>
                    </div>
                </div>
            </header>

                
            <main>
                
                    <ul>                
                    {
                        filteredProducts.length ? (
                            filteredProducts.map((element: any) => (
                                <li key={element.id}>                                    
                                    <figure>
                                        <img src={element.img}/>
                                    </figure>
                                    <div>
                                        <h2>{element.name}</h2>
                                        <p>{element.category}</p>
                                        <p>{element.price.toFixed(2)}</p>
                                        <button onClick={() => addProductToCart(element)}>Adicionar</button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            products.length &&                    
                                products.map((element: any) => (
                                    <li key={element.id}>
                                        <figure>
                                            <img src={element.img}/>
                                        </figure>
                                        <div>
                                            <h2>{element.name}</h2>
                                            <p>{element.category}</p>
                                            <p>{element.price.toFixed(2)}</p>
                                            <button onClick={() => addProductToCart(element)}>Adicionar</button>
                                        </div>
                                    </li>
                                ))                    
                            
                        )                    
                                                
                    }
                  
                
                                 
                    
                </ul>

                 

                {modal && 
                        <section>
                            <div>
                                <div>
                                    <h1>Carrinho</h1>
                                    <button onClick={() => setModal(false)}>X</button>
                                </div>
                                {currentSale.length  === 0 ? (
                                    <div>
                                        <h2>Sua sacola está vazia</h2>
                                        <p>Adicione itens</p>
                                    </div>
                                ) : (
                                    <ul>
                                    {
                                        currentSale.map((element: any) => (
                                            <li key={element.id}>
                                                <div>
                                                    <figure>
                                                        <img src={element.img}/>
                                                    </figure>
                                                    <div>
                                                        <h2>{element.name}</h2>
                                                        <div>
                                                            <button type="button" onClick={() => counterSub(currentSale, element.id)}>-</button>
                                                            <p>{element.count}</p>
                                                            <button type="button" onClick={() => counterAdd(currentSale, element.id)}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button  onClick={() => removeProductFromCart(element.id)}>T</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                )}
                                <div>
                                    <div>
                                        <p>Total</p>
                                        <p>R$ ${calculator(currentSale).toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => removeAllProductsFromCart()}>Remover Todos</button>
                                </div>
                            </div>
                        </section>
                        
                    
                }

                    
                
            </main>
        </Container>
    )
}