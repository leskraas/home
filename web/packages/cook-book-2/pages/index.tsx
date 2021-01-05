import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
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
                <Fragment key={recipe._id}>
                    <Link href={'/oppskrift/' + recipe.slug.current} passHref>
                        <a>{recipe.name}</a>
                    </Link>
                    <br />
                </Fragment>
            ))}
        </Layout>
    );
};
export default Home;
