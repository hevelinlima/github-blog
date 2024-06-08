import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .icon-custom{
    height: 1.125rem;
    width: 1.125rem;
    color: ${(props)=>props.theme["base-label"]};
  }
`