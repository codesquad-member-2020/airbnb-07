import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import '../../public/images/react-logo.png';
import '../../public/images/airbnb-logo.svg';
import '../../public/images/and-logo.png';
import '../../public/images/bonobono.jpg';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles