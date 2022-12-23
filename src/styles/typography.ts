import styled from "styled-components";

export const ParagraphMini = styled.p`
    font-size: var(--headline);
    /* line-height: 22px; */
    font-weight: 400;
    color: var(--grey-100);

    & span {
        font-weight: 500;
        color: var(--grey-600)
    }
`

export const ParagraphMiniCenter = styled.p`
    font-size: var(--headline);
    /* line-height: 22px; */
    font-weight: 400;
    color: var(--grey-100);
    text-align: center;
    width: 327px;
`

export const TitleBold = styled.h2`
    font-size: var(--title1);
    font-weight: 700;
    line-height: 24px;
    color: var(--grey-600)
`

export const TitleBoldWhite = styled.h2`
    font-size: var(--title1);
    font-weight: 700;
    line-height: 24px;
    color: var(--grey-0)
`

export const ErrorInfos = styled.p`
    font-size: var(--headlineBold);
    font-weight: 400;
    line-height: 16px;
    color: var(--negative);
    padding-left: 10px;
    margin-top: 6px;
`

export const ParagraphPrice = styled.p`
    font-size: var(--headline);    
    font-weight: 600;
    color: var(--color-primary);
`