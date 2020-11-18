import React from 'react';
import {urlFor} from "../utils/imageUrlBuilder";
import {IImage} from "../types/sanity";
import styled from "styled-components";

interface ISanityImage {
    image: IImage,
    quality?: number,
    className?: string;
}

export const SanityImage: React.FC<ISanityImage> = (props) => {
    return (
        <img style={{width: '100%'}} className={props.className} src={urlFor(props.image)
    .fit("clip")
    .quality(props.quality ?? 80)
    .url()}/>
    );
};
