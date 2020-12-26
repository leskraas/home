import React from 'react';
import { RecipeShort } from '../types/sanity';
import { Carousel } from './Carousel';
import { RecipeCard } from './RecipeCard';

type Props = {
    recipe: RecipeShort[];
};

export const RecipeCarousel: React.FC<Props> = (props) => {
    const { recipe } = props;
    return (
        <Carousel>
            {recipe &&
                recipe.map((recipe) => (
                    <RecipeCard layout={'vertical'} recipe={recipe} key={recipe._id} />
                ))}
        </Carousel>
    );
};
