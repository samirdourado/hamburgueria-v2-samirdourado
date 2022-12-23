import styled from "styled-components";

export const Infos = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 377px;  
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 541px) {
  }

  @media (max-width: 540px) {
  }
`;

export const InfosMain = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 377px;
  height: 95px;
  border-radius: 4px;
  border: solid 2px var(--grey-100);
  /* padding: 17px 23px 17px 13px; */
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const InfosBagBG = styled.figure`
  width: 60px;
  height: 60px;
  min-width: 60px;
  background-color: #27ae6010;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: var(--color-primary);
    width: 24px;
    height: 24px;
  }
`

export const DotsBG = styled.figure`
    width: 70px;
    

    @media (min-width: 541px) {
    }
    
    @media (max-width: 540px) {
        display: none;         
    }
`
