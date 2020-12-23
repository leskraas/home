import React from 'react';
import styled from 'styled-components';

export const Carousel: React.FC = (props) => {
    const { children } = props;
    return <CarouselContainer>{children}</CarouselContainer>;
};

const CarouselContainer = styled.div`
    overflow-x: scroll;
    will-change: scroll-position;
    cursor: grab;
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;
