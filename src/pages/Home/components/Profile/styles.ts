import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 54rem;
  width: 100%;
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
  @media only screen and (max-width: 430px) {
    max-width: 38rem;
    flex-direction: column;
    img{
      
      height: auto;
      width: 9rem;
    }
    a{
      display: none;
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
  padding: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`