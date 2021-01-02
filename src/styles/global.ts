import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2'),
        url('/fonts/poppins-v15-latin-300.woff') format('woff'),
        url('/fonts/poppins-v15-latin-300.ttf') format('truetype'),
        url('/fonts/poppins-v15-latin-300.svg#Poppins') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
        url('/fonts/poppins-v15-latin-regular.woff') format('woff'),
        url('/fonts/poppins-v15-latin-regular.ttf') format('truetype'),
        url('/fonts/poppins-v15-latin-regular.svg#Poppins') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v15-latin-500.woff2') format('woff2'),
        url('/fonts/poppins-v15-latin-500.woff') format('woff'),
        url('/fonts/poppins-v15-latin-500.ttf') format('truetype'),
        url('/fonts/poppins-v15-latin-500.svg#Poppins') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-700.eot');
    src: local(''),
        url('/fonts/poppins-v15-latin-700.eot?#iefix') format('embedded-opentype'),
        url('/fonts/poppins-v15-latin-700.woff2') format('woff2'),
        url('/fonts/poppins-v15-latin-700.woff') format('woff'),
        url('/fonts/poppins-v15-latin-700.ttf') format('truetype'),
        url('/fonts/poppins-v15-latin-700.svg#Poppins') format('svg');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
