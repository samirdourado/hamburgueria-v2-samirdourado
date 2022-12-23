import { ButtonHTMLAttributes } from "react"
import { ButtonLarge, ButtonLargeGreen } from "./style"

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {    
    text: string
} 

export const Button = ({ type, text }: iButton) => {
    return(
        <ButtonLarge type={type}>{text}</ButtonLarge>
    )
}

export const ButtonGreen = ({ type, text }: iButton) => {
    return(
        <ButtonLargeGreen type={type}>{text}</ButtonLargeGreen>
    )
}