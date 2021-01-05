import NextHead from 'next/head';
import React from 'react';

interface IProps {
    title?: string;
    description?: string;
}

export const Layout: React.FC<IProps> = ({ children, title, description }) => {
    return (
        <>
            <NextHead>
                <title>{title || ''}</title>
                <meta name="description" content={description || ''} />
                <meta name="theme-color" content={'#fff'} />
                <meta
                    name="description"
                    content="Din digitale kokebok. Skriv ned dine
                    egne oppskrifter eller søk etter andre sine,
                    og skap din helt egen unike kokebok"
                />
                <meta name="keywords" content="kokebok, mat, oppskrifter" />
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
            <nav>hei</nav>
            <main>{children}</main>
        </>
    );
};
