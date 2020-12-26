import React from 'react';
import { Image } from '../../types/sanity';
import { urlFor } from '../../utils/imageUrlBuilder';

interface ISanityImage {
    width?: number;
    image: Image;
    quality?: number;
    className?: string;
    alt?: string;
}

export const SanityImage: React.FC<ISanityImage> = (props) => {
    const { className, quality, image, width, alt } = props;
    const urlSrc = (() => {
        if (width) {
            return urlFor(image)
                .fit('clip')
                .quality(quality ?? 80)
                .width(width)
                .url();
        } else {
            return urlFor(image)
                .fit('clip')
                .quality(quality ?? 80)
                .url();
        }
    })();
    return <img alt={alt ?? ''} style={{ width: '100%' }} className={className} src={urlSrc} />;
};
