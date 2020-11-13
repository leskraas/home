import React from "react";
import NextHead from 'next/head'
import {createGlobalStyle} from 'styled-components';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {colors} from "../shared/Colors";

const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: colors.blue,
        },
        secondary: {
            main: colors.orange,
        },
    },
    typography: {
        htmlFontSize: 10,
        fontSize: 14,
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    },
})
const theme = {
    ...defaultTheme,
}

const GlobalStyle = createGlobalStyle`
  html {
        font-size: 62.5%;    
  }
  * {
        font-family: 'Poppins', sans-serif;
        font-size: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        word-wrap: break-word;
  }  
  html , body {
      height: 100%; overflow: hidden
  }
`;

interface IProps {
    title?: string;
    description?: string;
}

export const Layout: React.FC<IProps> = ({children, title, description}) => (
    <>
        <NextHead>
            <title>{title || ''}</title>
            <meta name="description" content={description || ''}/>
            <meta name="theme-color" content={'#fff'}/>
            {/*<link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />*/}
            {/*<link rel="apple-touch-icon" href="/static/images/icons-192.png" />*/}
            {/*<link rel="icon" href="/static/favicon.ico" />*/}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;1,300;1,400&display=swap"
                rel="stylesheet"/>
            <link rel="manifest" href="/manifest.json"/>
        </NextHead>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
    </>
)

