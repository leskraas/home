import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import * as t from '../../types/sanity';
import { getAllRecipeSlugs, getRecipeBySlug } from '../../lib/sanity-queries';
import { Layout } from '../../components/Layout';

type Props = {
    recipe: t.Recipe | null;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const data = await getRecipeBySlug(params?.slug);
    return { props: { recipe: data || null } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allRecipes = await getAllRecipeSlugs();
    const paths =
        allRecipes.map((recipe) => ({
            params: { slug: recipe.slug },
        })) || [];
    return {
        paths,
        fallback: true,
    };
};

const Recipe: NextPage<Props> = (props) => {
    const { recipe } = props;
    const { name } = recipe as t.Recipe;
    return (
        <Layout>
            <h1 style={{ fontSize: '3rem' }}>{name}</h1>
        </Layout>
    );
};

export default Recipe;
