import styled from "styled-components";

export const LayoutContainer =styled.div` 
 
`;

export const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;

  width: 100%;

  @media only screen and (max-width: 768px) {
   
    width: auto;
    padding: 0 1.5rem;
  } 
`