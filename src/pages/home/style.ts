import styled from "styled-components";

export const Header = styled.header`
    background-color: var(--grey-0);
    height: 80px;
    margin-bottom: 20px;
`

export const Section = styled.section`
    width: 100%;
    height: 80px;
    background-color: var(--grey-0);
    min-width: 320px;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    & > img {
        width: 159px;
        height: 37px;
    }
`

export const ActionPanel = styled.div`
    display: flex;
    gap: 20px;
`
export const Navs = styled.nav`
    width: 100%;
    max-width: 120px;
    min-width: 120px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonsActionFind = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--grey-400);
    display: none;
    transform: 8ms ease-in-out;

    @media (max-width: 624px) {
        display: flex;
    }
`

export const ButtonsActionCart = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--grey-400);
    display: flex;

    & > span {
        background-color: var(--color-primary);
        width: 15px;
        height: 15px;        
        border-radius: 100px;
        border: solid 2px var(--color-primary);
        color: var(--grey-0);
        display: flex;
        justify-content: center;
        align-items: center;        
        font-size: var(--headlineBold);
        font-weight: 600;
    }
`

export const ButtonsActionExit = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--grey-400);
    display: flex;
`