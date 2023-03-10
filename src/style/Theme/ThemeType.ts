import { DefaultTheme } from "styled-components";

export default interface IDefaultTheme extends DefaultTheme {
    colors: {
        primary: {
            main: string;
            primary200: string;
            primary300: string;
        };
        blue: string;
        sky: string;
        black: string;
    };
    typography: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        body1: string
    };
    shadow: {
        pop: string
    };
    breakpoints: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    }
}






