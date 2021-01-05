import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../lib/sanity-client';
import { Image } from '../types/sanity';

const builder: SanityImageUrl = imageUrlBuilder(sanityClient);

export const urlFor = (image: Image): SanityImageUrl => {
    return builder.image(image).auto('format');
};
