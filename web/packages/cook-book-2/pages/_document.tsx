import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import React from 'react';
import styled, { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang={'no'}>
                <Head>
                    {/*<link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />*/}
                    {/*<link rel="apple-touch-icon" href="/static/images/icons-192.png" />*/}
                    {/*<link rel="icon" href="/static/favicon.ico" />*/}
                    <meta name="theme-color" content={'#fff'} />
                    <meta name="keywords" content="kokebok, mat, oppskrifter" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
