import styled from "styled-components"

export const BgAtuthUser = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 500px;
    padding:  21px, 18px;
    border: solid 2px var(--grey-0);
    border-radius: 5px;

    @media (min-width: 541px) {
        padding: 26px 24px
        
    }
    
    @media (max-width: 540px) {
        padding: 21px 18px
    }

    & > h2 {
        margin-bottom: 20px;
    }
`

export const BgAuthUserHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    & a {
        color: var(--grey-300);
        font-size: var(--headline);
        font-weight: 500;
        text-decoration: underline;
    }
`
export const BgAuthUserFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    & a {
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
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border: 2px solid var(--grey-300);
            background-color: var(--grey-300);
            color: var(--grey-100);
        }
    }
`

export const BgInputs = styled.div`    
    width: 100%;
    height: 90px;
    
`
