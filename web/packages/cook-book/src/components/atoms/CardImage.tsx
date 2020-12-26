import React from 'react';
import styled from 'styled-components';
import * as t from '../../types/sanity';
import { SanityImage } from './SanityImage';

type CardImageProps = {
    image: t.Image;
    flexGrow?: number;
};

export const CardImage: React.FC<CardImageProps> = (props) => {
    const { image, flexGrow } = props;
    return (
        <Image flexGrow={flexGrow ?? 5}>
            <SanityImage image={image} />
        </Image>
    );
};

const Image = styled.div<{ flexGrow: number }>`
    border-radius: 20px;
    overflow: hidden;
    flex-grow: ${(props) => props.flexGrow};
    flex-basis: 0;
    flex-shrink: 1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
