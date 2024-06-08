import styled from "styled-components";

export const PostPageContainer = styled.div`
  max-width: 54rem;
  
`

export const PostPageContent = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;
  color: ${(props)=>props.theme['base-text']};

  p{
    word-wrap: break-word;
  }
`

