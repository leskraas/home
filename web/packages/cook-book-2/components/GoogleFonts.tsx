import React, { useEffect, useRef, useState } from 'react';
import NextHead from 'next/head';

type Props = {
    googleFontUrl: string;
};

export const GoogleFonts: React.FC<Props> = (props) => {
    const isMounted = useRef(false);
    const [, rerender] = useState(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            rerender(true);
        }
    }, []);

    const { googleFontUrl } = props;
    return (
        <NextHead>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link rel="preload" as="style" href={googleFontUrl} />
            <link
                rel="stylesheet"
                media={isMounted.current ? 'all' : 'print'}
                href={googleFontUrl}
            />
        </NextHead>
    );
};
