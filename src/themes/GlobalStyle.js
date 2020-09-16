import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

  *,*::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  * {
    margin: 0;
    padding: 0;
    color: #595959;
    font-family:'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    max-height: -webkit-fill-available;
  }

`;

export default GlobalStyle;
