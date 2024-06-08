import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
      box-shadow: 0 0 2px ${(props) => props.theme.blue};
    }

    body{
      background-color: ${(props) => props.theme['base-background']};
      -webkit-font-smoothing: antialiased;
      font-family: "Nunito", sans-serif;
      line-height: 1.6;

      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        background: ${(props)=>props.theme["base-border"]};
      }

      &::-webkit-scrollbar-thumb {
        background: ${(props)=>props.theme["base-label"]};
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:active {
        background: ${(props)=>props.theme["base-span"]};
      }
    }
  }
`