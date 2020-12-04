import { createGlobalStyle } from 'styled-components';
import { theGray } from '@/styles/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theGray}
  }
`;
