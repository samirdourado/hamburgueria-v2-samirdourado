import styled from "styled-components"

export const BackdropModal = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    position: fixed;
    top:0;
    left:0;
    align-items: center;
    justify-content: center;
    display: none;
    display: flex;     
`

export const ModalHeader = styled.div`
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    height: 54px;
    background-color: var(--color-primary);
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
        background-color: transparent;
        border: none;
        font-weight: 600;
        color: var(--grey-0);
        cursor: pointer;
    }
`

export const CartEmptyBg = styled.div`
    width: 100%;
    height: 158px;
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`

export const FoodCartHolder = styled.ul`
    width: 100%;
    min-width: 300px;
    max-height: 500px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    border-bottom: solid 3px var(--grey-20);
    background-color: var(--white);
    
    &::-webkit-scrollbar {
        background-color: var(--grey-0);
        width: 3px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    } &::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
        width: 3px;
        border-radius: 5px;
    }
`

export const FoodCart = styled.li`
    width: 100%;
    min-width: 280px;
    height: 80px;
    min-height: 80px;
    background-color: var(--grey-0);
    border-radius: 5px;
    display: flex;
    padding: 5px 0;
`

export const FoodCartWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    padding: 0 10px;    
`

export const FigureCart = styled.figure`
    width: 100%;
    height: 100%;
    max-width: 80px;
    max-height: 80px;    
    min-width: 80px;
    min-height: 80px;
    background-color: var(--grey-20);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

export const FoodImageCart = styled.img`
    width: 100%;
    height: 100%;
    max-width: 70px;
    max-height: 70px;
    min-width: 70px;
    min-height: 70px;
    object-fit: contain;
`

export const DataCart = styled.div`
    width: 100%;        
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CartTypeAmount = styled.div`
    display: flex;
    width: 100px;
    height: 34px;
    justify-content: space-between;
    align-items: center;
    border: solid 1px var(--grey-100);
    background-color: var(--grey-100);
    /* padding-right: 1vw; */
    /* height: 25px; */

    & > button {
        width: 30px;
        min-height: 30px;
        background-color: var(--grey-100);
        border: solid 1px var(--grey-100);
        color: var(--color-secondary);
        font-size: 22px;
        font-weight: 400;
        cursor: pointer;
    }

    & > p {
        background-color: var(--grey-0);
        width: 80%;
        text-align: center;
    }
`



export const Checkout = styled.div`
    width: 100%;
    height: 140px;
    min-width: 300px;
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    } 
`

