import styled from "styled-components";

export const SearchBarContainer = styled.form`
  margin-top: 4.5rem;
  max-width: 54rem;
  input{
    width: 100%;
    margin-top: 0.75rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 1rem;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;

    &::placeholder{
      color: ${(props) => props.theme['base-label']};
    }
  }
  @media only screen and (max-width: 450px) {
    max-width: 38rem;
  }
`

export const SearchBarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  h2{
    color: ${(props)=>props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
  span{
    color: ${(props)=>props.theme["base-span"]};
    font-size: 0.875rem;
  }
`