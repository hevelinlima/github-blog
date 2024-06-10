import styled from "styled-components";

export const CardContainer = styled.a`
  max-width: 26rem;
  max-height: 16.25rem;

  text-decoration: none;

  padding: 2rem;
  display: flex;
  flex-direction: column;

  background-color: ${(props)=>props.theme["base-post"]};
  border: 2px solid transparent;
  border-radius: 10px;

  p{
    margin-top: 1.25rem;
    overflow: hidden;
    color: ${(props)=>props.theme["base-text"]};
    font-size: 1rem;
  }
  &:hover{
    border: 2px solid ${(props)=>props.theme["base-border"]};
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  h1{
    max-width: 17.75rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props)=>props.theme["base-title"]};
  }
  span{
    font-size: 0.875rem;
    color: ${(props)=>props.theme["base-span"]};
  }
`