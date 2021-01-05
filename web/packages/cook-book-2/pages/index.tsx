import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Layout } from '../components/Layout';
import { RecipeCard } from '../components/RecipeCard';
import { getAllRecipeShort } from '../lib/sanity-queries';
import * as t from '../types/sanity';

export const getStaticProps: GetStaticProps = async () => {
    const recipesShort: t.RecipeShort[] = await getAllRecipeShort();
    return {
        props: {
            recipes: recipesShort,
        },
    };
};

type Props = {
    recipes: t.RecipeShort[];
};

const Home: NextPage<Props> = (props) => {
    const { recipes } = props;

    return (
        <Layout>
            {recipes?.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe._id} />
            ))}
        </Layout>
    );
};
export default Home;
