import logo from "../../assets/burguer-kenzie.svg"
import dots from "../../assets/dots.svg"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from "../../components/inputs"


export const LoginPage = () => {

    return(
        <Container>

            <div>
                <div>
                    <img src={logo}></img>
                    <div>
                        <img src=""></img>
                        <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                    </div>
                    <img src={dots}/>
                </div>

                <div>
                    <h2>Login</h2>
                    <form>
                        <div>
                            <Input id="name" type="text" placeholder="Digite seu nome" label="Nome:"/>                            
                        </div>
                        <div>
                            <Input id="password" type="password" placeholder="Digite sua senha" label="Senha:"/>
                        </div>
                        <button type="submit">Logar</button>
                    </form>
                    <div>
                        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                        <Link to="register">Cadastrar</Link>
                    </div>
                </div>
            </div>
            
        </Container>
    )
    
}