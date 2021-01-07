import NextHead from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

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
        return () => {
            isMounted.current = false;
        };
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
            {/*Before the component is mounted we set media to print.
            By doing so, the browser will loading this stylesheet without
            delaying the page render, asynchronously. When the the component is mounted we
            change the media to screen to apply the stylesheet.*/}
            <link
                rel="stylesheet"
                media={isMounted.current ? 'all' : 'print'}
                href={googleFontUrl}
            />
        </NextHead>
    );
};
