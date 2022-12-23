import styled from "styled-components"

export const ButtonLarge = styled.button`
    cursor: pointer;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 2px solid var(--grey-100);
    background-color: var(--grey-100);
    color: var(--grey-300);
    font-weight: 600;
    font-size: var(--title2);
    transition: 0.5s ease-in-out;

    &:hover {
        border: 2px solid var(--grey-300);
        background-color: var(--grey-300);
        color: var(--grey-100);
    }    
`

export const ButtonLargeGreen = styled.button`
    cursor: pointer;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--white);
    font-weight: 600;
    font-size: var(--title2);
    transition: 0.5s ease-in-out;

    &:hover {
        border: 2px solid var(--color-primary50);
        background-color: var(--color-primary50);
        color: var(--white);
    }    
`

export const ButtonAddToCart = styled.button`
    cursor: pointer;
    width: 100%;
    max-width: 106px;
    min-width: 106px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--grey-100);
    background-color: var(--grey-100);
    color: var(--grey-300);
    font-weight: 600;
    font-size: var(--title2);
    transition: 0.5s ease-in-out;

    &:hover {
        border: 2px solid var(--grey-300);
        background-color: var(--grey-300);
        color: var(--grey-100);
    }    
`

export const ButtonRemoveFromCart = styled.button`
    background-color: transparent;    
    margin-bottom: 40px;
    margin-right: 5px;
    color: var(--grey-400);
    border: none;
    cursor: pointer;
`