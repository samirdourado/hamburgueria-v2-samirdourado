import logo from "../../assets/burguer-kenzie.svg"
import dots from "../../assets/dots.svg"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from "../../components/inputs"
import { Button } from "../../components/buttons"
import { UserContext } from "../../contexts/userContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"

export interface iRegisterFormValues {
    name: string;
    email: string;
    password: string;
    passwordConfirm?: string;
}

export const RegisterPage = () => {

    const { registerNewUser, loading } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterFormValues>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })


    const submit: SubmitHandler<iRegisterFormValues> = (eventRegisterData) => {        
        console.log(eventRegisterData)
        registerNewUser(eventRegisterData)
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
                    <div>
                        <h2>Cadastro</h2>
                        <Link to="/">Retornar para o login</Link>
                    </div>
                    <form noValidate onSubmit={handleSubmit(submit)}>
                        <div>
                            <Input id="name" type="text" placeholder="Digite seu nome" label="Nome:" register={register("name")}  disabled={loading}/>
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                        <div>
                            <Input id="email" type="text" placeholder="Digite seu email" label="E-mail:" register={register("email")}  disabled={loading}/>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input id="password" type="password" placeholder="Crie um pin de 6 a 8 caracteres" label="Pin:" register={register("password")}  disabled={loading}/>
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div>
                            <Input id="pinConfirm" type="password" placeholder="Confirme o pin criado" label="Confirmar Pin:" register={register("passwordConfirm")}  disabled={loading}/>
                            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
                        </div>
                        <Button type="submit" text={loading ? "Cadastrando..." : "Cadastrar"}/>
                    </form>                    
                </div>
            </div>
            
        </Container>
    )
}
