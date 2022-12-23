import styled from "styled-components";

export const MainContent = styled.main`
  width: 100%;
  min-width: 320px;
  max-width: 1600px;
  margin: 0 auto;
  display: flex; 
  /* padding: 0 180px; */
`

export const ProductsList = styled.ul`    
  width: 100%;
  min-width: 300px;
  max-width: 1600px;
  display: flex;
  padding: 0 5px;
  /* align-content: center; */
  
  @media (min-width: 1600px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
  }
  
  @media (max-width: 1599px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: space-evenly;
  } 

  @media (max-width: 624px) {
    /* padding: 0 2vw; */
    /* background-color: aliceblue; */
    width: 100%;
    height: 375px;
    flex-direction: column;
    /* flex-wrap: wrap; */
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      background-color: var(--grey-0);
      height: 3px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;        
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      height: 3px;
      border-radius: 5px;
      margin: 0 5px;        
    }
  }
  
`

export const FoodCard = styled.li`
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    height: 346px;
    background-color: var(--white);
    border-radius: 5px;
    border: solid 2px var(--grey-50);
    display: flex;
    flex-direction: column;
    
    &&:hover {
        border: solid 2px var(--color-primary-50);
    }
`

export const FigureCard = styled.figure`
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const FoodImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const DataCardBg = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    padding-left: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`