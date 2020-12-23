import React from 'react';
import { RecipeShort } from '../types/sanity';
import { RecipeCard } from './card/RecipeCard';
import { Carousel } from './Carousel';

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
