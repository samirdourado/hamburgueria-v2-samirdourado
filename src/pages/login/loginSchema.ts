import * as yup from "yup"


export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome precisa de pelo menos 3 caracteres"),
        
    password: yup
        .string()
        .required("PIN obrigatório")  
        .min(6, "O pin precisa de pelo menos 6 caracteres")
        .max(8, "Pin pode ter maximo de 8 caracteres"),      
})
