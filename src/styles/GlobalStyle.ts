import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing : antialiased;
    background-color: ${({ theme }) => theme.background};
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;
  }
`;
