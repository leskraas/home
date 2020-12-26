import NextHead from 'next/head';
import React from 'react';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';

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
    },
    borderRadius: {
        lg: '20px',
        md: '10px',
        sm: '5px',
    },
    fonts: ['Roboto', 'Helvetica', 'Verdana', 'sans-serif'],
    fontSize: {
        xxl: '3rem',
        xl: '2.4rem',
        lg: '2rem',
        md: '1.6rem',
        sm: '1.2rem',
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
  }
`;

interface IProps {
    title?: string;
    description?: string;
}

export const Layout: React.FC<IProps> = ({ children, title, description }) => (
    <>
        <NextHead>
            <title>{title || ''}</title>
            <meta name="description" content={description || ''} />
            <meta name="theme-color" content={'#fff'} />
            {/*<link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />*/}
            {/*<link rel="apple-touch-icon" href="/static/images/icons-192.png" />*/}
            {/*<link rel="icon" href="/static/favicon.ico" />*/}
            <link rel="manifest" href="/manifest.json" />
            {/*<link rel="stylesheet" href="https://use.typekit.net/pnf4qsl.css" />*/}
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap"
                rel="stylesheet"
            />
        </NextHead>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);
