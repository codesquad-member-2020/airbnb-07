import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles