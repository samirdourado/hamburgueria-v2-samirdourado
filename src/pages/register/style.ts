import styled from "styled-components"

export const ContainerRegister = styled.div`

    display: flex;
    transition: 0.8s ease-in-out;
    align-items: center;
    padding: 0 5px;

    @media (min-width: 821px) {
        margin-top: 98px;
        flex-direction: row;
        gap: 62px;
        /* transition: 0.8s ease-in-out; */
    }

    @media (max-width: 820px) {
        margin-top: 40px;
        flex-direction: column;
        gap: 14px;
        /* transition: 0.8s ease-in-out; */
    }
`



