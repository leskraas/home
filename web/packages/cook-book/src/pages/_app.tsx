import { AppProps } from 'next/app';
import React from 'react';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Layout title={'Kokeboken'}>
            <Component {...pageProps} key={router.route} />
        </Layout>
    );
}
