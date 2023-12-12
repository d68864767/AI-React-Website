import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset styles */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  /* Global styles */
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  header {
    background-color: #f2f2f2;
    padding: 16px;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: inline-block;
    margin-right: 16px;
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
  }

  footer {
    background-color: #f2f2f2;
    padding: 16px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
`;

export default GlobalStyles;
