import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Digite um nome válido.")
        .min(3, "Mínimo 3 caracteres.")
        .max(51, "Máximo 3 caracteres."),

    email: yup
        .string()
        .required("Email é obrigatório.")
        .email("E-mail inválido."),

    password: yup
        .string()
        .required("Digite um pin válido.")
        .min(6, "Mínimo 6 caracteres.")
        .max(8, "Máximo 8 caracteres.")
        .matches(/(?=.*?[A-Z])/, "Necessário pelo menos uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "Necessário pelo menos uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "Necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "Necessário pelo menos um caractere especial."),
    
    passwordConfirm: yup
        .string()
        .required("Confirme o pin.")
        .min(6,"Minimo 6 caracteres.")
        .max(8, "Máximo 8 caracteres.")
        .oneOf([yup.ref("password"), null], "Os Pins não coincidem."),
})