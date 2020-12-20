import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import client from '../client';
import { colors } from '../components/atoms/Colors';
import { RecipeCard } from '../components/card/RecipeCard';
import * as t from '../types/sanity';
import { categoryQuery, groceryQuery, recipeQuery } from '../utils/SanityQuery';

interface IProps {
    inspoRecipes: t.Recipe[];
    recipes: t.Recipe[];
    categories: t.Category[];
    searchOptions: { name: string }[];
}

const CookBook: NextPage<IProps> = (props) => {
    return (
        <>
            <Main>
                <RecipeCarousel>
                    {props.inspoRecipes &&
                        props.inspoRecipes.map((recipe) => (
                            <RecipeCard key={recipe._id} {...recipe} />
                        ))}
                </RecipeCarousel>
            </Main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const recipes: t.Recipe[] = await client.fetch(recipeQuery, {});
    const categories: t.Category[] = await client.fetch(categoryQuery, {});
    const groceries: t.Grocery[] = await client.fetch(groceryQuery, {});
    return {
        props: {
            inspoRecipes: recipes,
            recipes: recipes,
            categories: categories,
            searchOptions: [...categories, ...recipes, ...groceries],
        },
    };
};

export default CookBook;

const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(200deg, ${colors.blue}, ${colors.blueFade});
    padding: 4rem 0;
`;

const RecipeCarousel = styled.div`
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
