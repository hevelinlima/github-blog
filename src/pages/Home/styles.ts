import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto; 

  section {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    section {
      grid-template-columns: 1fr; 
    }
  }
`;
