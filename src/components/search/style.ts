import styled from "styled-components";

export const SearchForm = styled.form`    
    width: 100%;
    min-width: 300px;
    max-width: 382px;
    height: 60px;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 8ms ease-in-out;

    @media (max-width: 624px) {
        display: none;
    }
`

export const SearchFormSecret = styled.form`    
    width: 100%;
    min-width: 300px;
    max-width: 624px;
    height: 60px;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 8ms ease-in-out;
    position: fixed;
    /* top: ; */
    left: 0;
    right: auto;
    z-index: 2;
    background-color: var(--white);
    margin: 0 2px;

    @media (min-width: 624px) {
        display: none;        
    }
`

export const InputSearch = styled.input`
    width: 80%;
    height: 100%;
    border: none;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`
export const ButtonSearch = styled.button`

    min-width: 53px;
    max-width: 53px;
    min-height: 40px;
    max-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    border: solid 2px var(--color-primary);
    border-radius: 8px;
    color: var(--white);
    cursor: pointer;
`