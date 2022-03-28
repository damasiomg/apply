import { createGlobalStyle } from 'styled-components';

import backgroundJob from '../assets/job.png';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background: #F0F0F5 url(${backgroundJob}) no-repeat 80% top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #app{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;