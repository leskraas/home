import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { RecipeCarousel } from '../components/RecipeCarousel';
import { getAllRecipeWithMain, getAllRecipeWithShort } from '../lib/api';
import client from '../lib/sanity';
import * as t from '../types/sanity';
import { categoryQuery, groceryQuery } from '../utils/SanityQuery';

interface IProps {
    inspoRecipes: t.RecipeShort[];
    recipes: t.RecipeMain[];
    categories: t.Category[];
    searchOptions: { name: string }[];
}

const CookBook: NextPage<IProps> = (props) => {
    return (
        <div>
            <RecipeCarousel inspoRecipes={props.inspoRecipes} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const recipes: t.RecipeMain[] = await getAllRecipeWithMain();
    const inspoRecipes: t.RecipeShort[] = await getAllRecipeWithShort();
    const categories: t.Category[] = await client.fetch(categoryQuery, {});
    const groceries: t.Grocery[] = await client.fetch(groceryQuery, {});
    return {
        props: {
            inspoRecipes: inspoRecipes,
            recipes: recipes,
            categories: categories,
            searchOptions: [...categories, ...recipes, ...groceries],
        },
    };
};

export default CookBook;
