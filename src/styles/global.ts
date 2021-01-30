/* eslint-disable arrow-parens */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h4, h6, strong {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  a, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
