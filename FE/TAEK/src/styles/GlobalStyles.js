import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

const fonts = css`

`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}

  body {
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles