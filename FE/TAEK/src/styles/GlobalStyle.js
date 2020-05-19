import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

const fonts = css`

`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  body {
    font-family: -apple-system, sans-serif;
  }
`;

export default GlobalStyle