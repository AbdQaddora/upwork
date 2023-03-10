import IDefaultTheme from "./ThemeType";

const colors = {
    primary: {
        main: "#14a800",
        primary200: "#3c8224",
        primary300: "#95df00",
    },
    blue: "#1f57c3",
    sky: "#01cdbe",
    black: "#001e00",
}

const typography = {
    h1: "font-size:26px; line-height:32px",
    h2: "font-size:22px; line-height:28px",
    h3: "font-size:18px; line-height:24",
    h4: "font-size:16px; line-height:22px",
    body1: "font-size:14px; line-height:18px",
}

const shadow = {
    pop: "0 0 10px 2px rgba(0,30,0,0.15);"
}

const breakpoints = {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
}

export const defaultTheme: IDefaultTheme = {
    colors,
    typography,
    shadow,
    breakpoints,
}
