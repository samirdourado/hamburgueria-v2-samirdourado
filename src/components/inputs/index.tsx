
import { InputHTMLAttributes } from "react"

// interface iInput extends InputHTMLAttributes<HTMLInputElement> {
interface iInput  {
    id: string;
    type: string;
    placeholder: string;
    label?: string;
    register: any
    disabled?: boolean;

}              

export const Input = ({ id, type, placeholder, label, register, disabled}: iInput) => {
    return(
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} {...register} disabled={disabled}/>
        </fieldset>
    )
}

