import { createGlobalStyle } from 'styled-components';

import tokens from './tokens';

export default createGlobalStyle`    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Inter, sans-serif, Arial, Helvetica;
    }

    html,
    body {
        max-width: 100vw;        
        background: #FFF;
    }

    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
