import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #FFE81F;
    --secondary: #000000;
    --white: #FFFFFF;
    --gray-light: #8D8D99;
    --gray-dark: #1E1E1E;
    --error: #FD4B4B;
    --success: #66FE63;
    --danger: #FDB03E;
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color: var(--secondary);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: overlay;
    color: var(--white);
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;