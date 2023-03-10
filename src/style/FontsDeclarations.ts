import { css } from 'styled-components';

// fonts
import Bold from '../assets/fonts/NeueMontreal-Bold.otf';
import Medium from '../assets/fonts/NeueMontreal-Medium.otf';
import Regular from '../assets/fonts/NeueMontreal-Regular.otf';
import Light from '../assets/fonts/NeueMontreal-Light.otf';

const FontsDeclarations = css`
    @font-face {
        font-family: 'NeueMontreal';
        src: local('NeueMontreal'), local('NeueMontreal'),
        url(${Bold}) format('otf');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'NeueMontreal';
        src: local('NeueMontreal'), local('NeueMontreal'),
        url(${Medium}) format('otf');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'NeueMontreal';
        src: local('NeueMontreal'), local('NeueMontreal'),
        url(${Regular}) format('otf');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'NeueMontreal';
        src: local('NeueMontreal'), local('NeueMontreal'),
        url(${Light}) format('otf');
        font-weight: 400;
        font-style: normal;
    }

`

export default FontsDeclarations;
