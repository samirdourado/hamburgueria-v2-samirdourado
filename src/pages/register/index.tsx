import logo from "../../assets/burguer-kenzie.svg"
import dots from "../../assets/dots.svg"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from "../../components/inputs"


export const RegisterPage = () => {

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
                    <div>
                        <h2>Cadastro</h2>
                        <Link to="/">Retornar para o login</Link>
                    </div>
                    <form>
                        <div>
                            <Input id="name" type="text" placeholder="Digite seu nome" label="Nome:"/>                            
                        </div>
                        <div>
                            <Input id="email" type="text" placeholder="Digite seu email" label="E-mail:"/>                            
                        </div>
                        <div>
                            <Input id="password" type="password" placeholder="Digite pin" label="Pin:"/>
                        </div>
                        <div>
                            <Input id="passwordC" type="password" placeholder="Digite o mesmo pin" label="Confirmar Pin:"/>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>                    
                </div>
            </div>
            
        </Container>
    )
    
}