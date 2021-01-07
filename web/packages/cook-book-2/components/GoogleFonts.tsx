import React from 'react';

type Props = {
    googleFontUrl: string;
};

export const GoogleFonts: React.FC<Props> = (props) => {
    const { googleFontUrl } = props;
    return (
        <>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link rel="preload" as="style" href={googleFontUrl} />
            <link rel="stylesheet" media="all" href={googleFontUrl} />
        </>
    );
};
