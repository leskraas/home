import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import React from 'react';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Layout title={'Kokeboken'}>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Layout>
    );
}
