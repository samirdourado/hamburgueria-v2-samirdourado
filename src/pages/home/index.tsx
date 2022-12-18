import { Container } from "../../components/container"
import logo from "../../assets/burguer-kenzie.svg"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"

export const HomePage = () => {
    const { user, logoutUser, products } = useContext(UserContext)
    console.log(products)
    return(
        <Container>
            <header>
                <img src={logo}></img>
                <div>
                    <form>
                        <input id="searchArea" type={"text"} placeholder="Digite seu nome"/>
                        <button type="submit">P</button>
                    </form>
                    <div>
                        <button type="button"> Lupa </button>
                        <button type="button"> Cart </button>
                        <button type="button" onClick={() => logoutUser()}> Sair </button>
                    </div>
                </div>
            </header>

            <main>
                <ul>                
                    {products.length ? 
                    (products.map((element: any) => (
                        <li key={element.id}>
                            <figure>
                                <img src={element.img}/>
                            </figure>
                            <div>
                                <h2>{element.name}</h2>
                                <p>{element.category}</p>
                                <p>{element.price}</p>
                                <button>Adicionar</button>
                            </div>
                        </li>
                    ))
                        
                    
                    ) : (<li>loading</li>)}
                
                    
                    
                </ul>
            </main>
        </Container>
    )
}