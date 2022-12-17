
import { InputHTMLAttributes } from "react"

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: string;
    placeholder: string;
    label?: string;
}              

export const Input = ({ id, type, placeholder, label, }: iInput) => {
    return(
        <fieldset>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} placeholder={placeholder}></input>
    </fieldset>
    )
}