import styled from "styled-components";

export const LoadingContainer = styled.div`
  font-size: 3rem;
  color: ${(props)=>props.theme["base-title"]};
  width: 35rem;
  height: 25rem;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`