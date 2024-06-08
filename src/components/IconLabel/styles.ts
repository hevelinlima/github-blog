import styled from "styled-components";

export const IconLabelContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 1.188rem;
  position: absolute;
  top: 2.5rem;
  right: 2rem;
  
  color: ${(props)=>props.theme.blue};
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;

  border-bottom: 2px solid transparent;

  &:hover{
    border-bottom: 2px solid  ${(props)=>props.theme.blue};
    transition: border-bottom 0.2s;
  }
`