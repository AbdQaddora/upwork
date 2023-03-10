import { createGlobalStyle } from 'styled-components';
import FontsDeclarations from './FontsDeclarations';

const GlobalStyle = createGlobalStyle`
    ${FontsDeclarations};
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NeueMontreal" ,Helvetica,Arial,sans-serif;
    }
`;

export default GlobalStyle;