import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f0f2f5;
        color: #333;
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    a {
        color: #0070f3;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default GlobalStyle;

