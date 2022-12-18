import { ButtonHTMLAttributes } from "react"

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {    
    text: string
} 

export const Button = ({ type, text }: iButton) => {
    return(
        <button type={type}>{text}</button>
    )
}