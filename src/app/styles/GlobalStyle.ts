import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};
    font-family: "Roboto", sans-serif;
    transition: background 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;
