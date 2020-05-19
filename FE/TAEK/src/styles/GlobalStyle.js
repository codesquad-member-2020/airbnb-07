import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

const fonts = css`

`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  body {
    font-family: -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width : 100%;
    height: 100vh;
  }
  #root {
    height : 100%;
  }
`;

export default GlobalStyle