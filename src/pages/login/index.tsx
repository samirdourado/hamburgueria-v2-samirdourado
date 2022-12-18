import logo from "../../assets/burguer-kenzie.svg"
import dots from "../../assets/dots.svg"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from "../../components/inputs"
import { Button } from "../../components/buttons"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/userContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"

export interface iLoginFormValues {
    name: string;
    email: string;
    password: string;
}

export const LoginPage = () => {

    const { loginUser, loading } = useContext(UserContext)    

    const { register, handleSubmit, formState: { errors }, reset } = useForm<iLoginFormValues>({    
        mode: "onBlur",
        resolver: yupResolver(loginSchema)
    })

    const submit: SubmitHandler<iLoginFormValues> = (eventLoginData) => {
        loginUser(eventLoginData)
        reset()
    }

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
                    <form  onSubmit={handleSubmit(submit)}>
                        <div>
                            <Input id="email" type="text" placeholder="Digite seu nome" label="Nome:" register={register("email")}  disabled={loading}/>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input id="password" type="password" placeholder="Digite sua senha" label="Senha:" register={register("password")}  disabled={loading}/>
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <Button type={"submit"} text={loading ? "Autenticando..." : "Logar"}/>
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