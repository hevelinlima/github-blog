import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 54rem;
  position: relative;
  margin-top: -5.5rem;
  z-index: 1;

  border-radius: 10px;
  background-color: ${(props)=>props.theme["base-profile"]};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.75);
  padding: 2rem 2.5rem ;

  img{
    height: 9.25rem;
    border-radius: 8px;
  }
  a{
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
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1{
    color: ${(props)=>props.theme["base-title"]};
    font-size: 1.5rem;
  }
  p{
    color: ${(props)=>props.theme["base-text"]};
    font-size: 1rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .icon-custom{
      height: 1.125rem;
      width: 1.125rem;
      color: ${(props)=>props.theme["base-label"]};
    }
  }
`