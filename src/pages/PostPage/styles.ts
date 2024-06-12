import styled from "styled-components";

export const PostPageContainer = styled.div`
  max-width: 54rem;
  @media only screen and (max-width: 768px) {
    max-width: 35rem;
  }
`

export const PostPageContent = styled.div`
  max-width: 54rem;
  width: 100%;
  padding: 2.5rem 2rem;
  color: ${(props)=>props.theme['base-text']};

  .body-issue{
    width: 100%;
    padding: 1.25rem 0;
    word-wrap: break-word;
    a{
      color: ${(props)=>props.theme.blue};
    }
    p{
      img{
        max-width: 45rem;
        height: auto;
      }
    }
    img{
      width: 80%;
      height: auto;
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 0.25rem;
    .body-issue{
      max-width: 38rem; 
      p{
        img{
          max-width: 35rem;
          height: auto;
        }
      }
    }
  }
`

