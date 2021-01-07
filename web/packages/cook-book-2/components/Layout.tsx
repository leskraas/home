import NextHead from 'next/head';
import React from 'react';
import styled from 'styled-components';
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
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </NextHead>
            <NavBar />
            <Main>{children}</Main>
        </>
    );
};

const Main = styled.main`
    padding-bottom: 80px;
`;
