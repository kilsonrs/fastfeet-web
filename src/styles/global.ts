import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
    --color-background: #F5F5F5;

    --color-purple: #7D40E7;

    --color-white: #FFFFFF;

    --color-blue-50: #BAD2FF;
    --color-blue-500: #4D85EE;

    --color-red-50: #FAB0B0;
    --color-red-500: #DE3B3B;

    --color-green-50: #DFF0DF;
    --color-green-500: #2CA42B;

    --color-yellow-50: #F0F0DF;
    --color-yellow-500: #C1BC35;

    --color-gray-50: #EEEEEE;
    --color-gray-100: #EEEEEE;
    --color-gray-200: #DDDDDD;
    --color-gray-300: #C6C6C6;
    --color-gray-400: #999999;
    --color-gray-500: #666666;
    --color-gray-600: #444444;

    --color-shadow: #00000026;
  }

  body {
    background: var(--color-background);
    height: 100%;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
    color: var(--color-gray-600);
  }
`;
