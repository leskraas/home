import { AppProps } from 'next/app';
import React from 'react';
import {
    createGlobalStyle,
    DefaultTheme,
    ThemeProvider,
} from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        primary: '#433232',
        secondary: '#FF9A00',
        textOnPrimary: '#FAFAFA',
        text: '#433232',
        textSecondary: '#736767',
        backgroundPrimary: '#FAFAFA',
        backgroundSecondary: '#FFFFFF',
    },
    shadows: {
        primary: '0px 2px 15px rgba(0, 0, 0, 0.1)',
        secondary: '0px 2px 15px rgba(0, 0, 0, 0.3)',
    },
    borderRadius: {
        lg: '20px',
        md: '10px',
        sm: '5px',
    },
    fonts: ['Helvetica', 'Verdana', 'sans-serif'],
    fontSize: {
        xxl: '3rem',
        xl: '2.4rem',
        lg: '2rem',
        md: '1.6rem',
        sm: '1.4rem',
        xs: '1rem',
    },
};

const GlobalStyle = createGlobalStyle`
  html {
        font-size: 62.5%;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        color: ${theme.colors.text};
        background-color: ${theme.colors.backgroundPrimary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
  }
  * {
        font-family: Roboto, Helvetica, Verdana, sans-serif;
        font-size: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        word-wrap: break-word;
  }  
  html , body {
      height: 100%;
      overflow: hidden;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
