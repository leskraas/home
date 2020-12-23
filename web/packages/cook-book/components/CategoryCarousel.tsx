import React from 'react';
import { Category } from '../types/sanity';
import { Button } from './atoms/Button';
import { Carousel } from './Carousel';

type Props = {
    categories: Category[];
};

export const CategoryCarousel: React.FC<Props> = (props) => {
    const { categories } = props;
    return (
        <Carousel>
            {categories &&
                categories.map((category, i) => (
                    <Button key={category.name + i}>{category.name}</Button>
                ))}
        </Carousel>
    );
};
