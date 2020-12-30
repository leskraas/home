import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { RecipeCarousel } from '../components/RecipeCarousel';
import { getAllRecipeShort, getAllRecipeWithMain } from '../lib/api';
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
    const router = useRouter();
    return (
        <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/*<CategoryCarousel categories={props.categories} />*/}
            <RecipeCarousel recipe={props.inspoRecipes.filter((recipe) => recipe.mainImage)} />
            {/*{props.inspoRecipes[1] && <RecipeCard recipe={props.inspoRecipes[1]} />}*/}
            {props.inspoRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe._id} />
            ))}
        </motion.div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const recipes: t.RecipeMain[] = await getAllRecipeWithMain();
    const inspoRecipes: t.RecipeShort[] = await getAllRecipeShort();
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
