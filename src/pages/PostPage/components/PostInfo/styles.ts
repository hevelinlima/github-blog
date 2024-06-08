import styled from "styled-components";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 54rem;
  
  margin-top: -5.5rem;
  z-index: 1;

  border-radius: 10px;
  background-color: ${(props)=>props.theme["base-profile"]};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.75);
  padding: 2rem 2.5rem ;

  h1{
    margin-top: 0.75rem;
    color: ${(props)=>props.theme["base-title"]};
    font-size: 1.25rem;
  }
`

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 1.188rem;
    
    color: ${(props)=>props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;

    border-bottom: 2px solid transparent;

    &:hover{
      border-bottom: 2px solid  ${(props)=>props.theme.blue};
      transition: border-bottom 0.2s;
    }
  }
`

export const InfoIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  
  p{
    color: ${(props)=>props.theme["base-text"]};
    font-size: 1rem;
  }
`