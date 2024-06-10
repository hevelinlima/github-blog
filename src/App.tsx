import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ApiProvider } from "./contexts/ApiContext";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApiProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApiProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

