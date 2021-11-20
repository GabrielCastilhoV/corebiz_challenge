import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1.6rem 'Nunito', sans-serif;
  }

  body {
    background-color: ${theme.colors.white};
    color: ${theme.colors.white};
  }
`}
`;

export default GlobalStyles;
