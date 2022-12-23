
import { InputHTMLAttributes } from "react"
import { FieldSet } from "./style";

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
        <FieldSet>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} {...register} disabled={disabled}/>
        </FieldSet>
    )
}

