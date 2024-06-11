import styled from "styled-components";

export const DivHome = styled.div`
  max-width: 54rem;
  width: auto;
  margin: 0 auto; 
  padding: 0 0.5rem;
  @media only screen and (max-width: 768px) {
    max-width: 38rem;
  }
`

export const HomeContainer = styled.main`
  

  section {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 40rem;
    section {
      grid-template-columns: 1fr; 
    }
  }
`;
