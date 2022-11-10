import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

// _app,hs -> Definições globais do NextJS
// ThemeProvider

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

// original conforme o site do Next JS.
function MyApp({ Component, pageProps }) {
    //     console.log("Olá!")
    //     const themeActive={
    //         backgroundLevel1:"red",
    // };
    const contexto = React.useContext(ColorModeContext);
    console.log(contexto.mode);

    return (
        // <ThemeProvider theme={themeActive}>
        // <ColorModeProvider initialMode={"dark"}>
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
        // </ColorModeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
};

// Ou, conforme a aula.
// function MyApp({ Component, pageProps }) {
//     console.log("Olá!")
//     return <Component {...pageProps} />
// }
// export default MyApp;