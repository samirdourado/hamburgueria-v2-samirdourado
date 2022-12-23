import styled from "styled-components";

export const FieldSet = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;

    & label {
        font-size: var(--headlineBold);
        color: var(--grey-400);
        line-height: 14px;
        padding-left: 10px;
        margin-bottom: 5px;
    }

    & input {
        width: 100%;
        height: 60px;
        padding-left: 10px;
        border: solid 2px var(--grey-300);
        border-radius: 8px;
    }
`
    