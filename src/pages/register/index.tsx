import { useContext } from "react"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from "../../components/inputs"
import { Button } from "../../components/buttons"
import { UserContext } from "../../contexts/userContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"
import { ContainerRegister } from "./style"
import { InfosToUser } from "../../components/infosToUser"
import { BgAtuthUser, BgAuthUserHeader, BgInputs } from "../../styles/divs"
import { ErrorInfos, TitleBold } from "../../styles/typography"
import { FormLoginAndRegister } from "../../components/forms"

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const RegisterPage = () => {

  const { registerNewUser, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = (eventRegisterData) => {
    registerNewUser(eventRegisterData);
    reset();
  };

  return (
    <Container>
      <ContainerRegister>
        <InfosToUser/>
        <BgAtuthUser>
          <BgAuthUserHeader>
            <TitleBold>Cadastro</TitleBold>
            <Link to="/">Retornar para o login</Link>
          </BgAuthUserHeader>
          
          <FormLoginAndRegister noValidate onSubmit={handleSubmit(submit)}>            
            <BgInputs>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                label="Nome:"
                register={register("name")}
                disabled={loading}
              />
              {errors.name && <ErrorInfos>{errors.name.message}</ErrorInfos>}
            </BgInputs>

            <BgInputs>
              <Input
                id="email"
                type="text"
                placeholder="Digite seu email"
                label="E-mail:"
                register={register("email")}
                disabled={loading}
              />
              {errors.email && <ErrorInfos>{errors.email.message}</ErrorInfos>}
            </BgInputs>

            <BgInputs>
              <Input
                id="password"
                type="password"
                placeholder="Crie um pin de 6 a 8 caracteres"
                label="Pin:"
                register={register("password")}
                disabled={loading}
              />
              {errors.password && <ErrorInfos>{errors.password.message}</ErrorInfos>}
            </BgInputs>

            <BgInputs>
              <Input
                id="pinConfirm"
                type="password"
                placeholder="Confirme o pin criado"
                label="Confirmar Pin:"
                register={register("passwordConfirm")}
                disabled={loading}
              />
              {errors.passwordConfirm && (<ErrorInfos>{errors.passwordConfirm.message}</ErrorInfos>
              )}
            </BgInputs>

            <Button
              type="submit"
              text={loading ? "Cadastrando..." : "Cadastrar"}
            />
          </FormLoginAndRegister>
        </BgAtuthUser>
      </ContainerRegister>
    </Container>
  )
}