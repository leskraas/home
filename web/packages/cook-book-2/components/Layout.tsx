import NextHead from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { GoogleFonts } from './GoogleFonts';
import { NavBar } from './NavBar';

interface IProps {
    title?: string;
    description?: string;
}

export const Layout: React.FC<IProps> = ({ children, title, description }) => {
    return (
        <>
            <NextHead>
                <title>{title || 'Din digitale kokebok'}</title>
                <meta
                    name="description"
                    content={
                        description ||
                        'Din digitale kokebok. Skriv ned dine egne oppskrifter eller søk etter andre sine, og skap din helt egen unike kokebok'
                    }
                />
                <meta name="theme-color" content={'#fff'} />
                <meta name="keywords" content="kokebok, mat, oppskrifter" />
                {/*<link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />*/}
                {/*<link rel="apple-touch-icon" href="/static/images/icons-192.png" />*/}
                {/*<link rel="icon" href="/static/favicon.ico" />*/}
                <link rel="manifest" href="/manifest.json" />
                {/*<link rel="stylesheet" href="https://use.typekit.net/pnf4qsl.css" />*/}
            </NextHead>
            <GoogleFonts
                googleFontUrl={
                    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap'
                }
            />
            <NavBar />
            <Main>{children}</Main>
        </>
    );
};

const Main = styled.main`
    padding-bottom: 80px;
`;
