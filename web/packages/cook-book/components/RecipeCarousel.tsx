import React from 'react';
import styled from 'styled-components';
import { RecipeShort } from '../types/sanity';
import { RecipeCard } from './card/RecipeCard';

type Props = {
    inspoRecipes: RecipeShort[];
};

export const RecipeCarousel: React.FC<Props> = (props) => {
    const { inspoRecipes } = props;
    return (
        <Carousel>
            {inspoRecipes &&
                inspoRecipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
        </Carousel>
    );
};

const Carousel = styled.div`
    overflow-x: scroll;
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;
