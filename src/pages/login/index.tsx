import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from "../../components/inputs"
import { ButtonGreen } from "../../components/buttons"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { ContainerLogin } from "./style"
import { InfosToUser } from "../../components/infosToUser"
import { BgAtuthUser, BgAuthUserFooter, BgInputs } from "../../styles/divs"
import { ErrorInfos, ParagraphMiniCenter, TitleBold } from "../../styles/typography"
import { FormLoginAndRegister } from "../../components/forms"

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

            <ContainerLogin>
                <InfosToUser/>                
                <BgAtuthUser>
                    <TitleBold>Login</TitleBold>
                    <FormLoginAndRegister  onSubmit={handleSubmit(submit)}>
                        <BgInputs>
                            <Input id="email" type="text" placeholder="Digite seu nome" label="Nome:" register={register("email")}  disabled={loading}/>
                            {errors.email && <ErrorInfos>{errors.email.message}</ErrorInfos>}
                        </BgInputs>
                        <BgInputs>
                            <Input id="password" type="password" placeholder="Digite sua senha" label="Senha:" register={register("password")}  disabled={loading}/>
                            {errors.password && <ErrorInfos>{errors.password.message}</ErrorInfos>}
                        </BgInputs>
                        <ButtonGreen type={"submit"} text={loading ? "Autenticando..." : "Logar"}/>
                    </FormLoginAndRegister>
                    <BgAuthUserFooter>
                        <ParagraphMiniCenter>Crie sua conta para saborear muitas delícias e matar sua fome!</ParagraphMiniCenter>
                        <Link to="register">Cadastrar</Link>
                    </BgAuthUserFooter>
                </BgAtuthUser>
            </ContainerLogin>            
        </Container>
    )
}