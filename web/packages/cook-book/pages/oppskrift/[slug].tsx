import { GetServerSideProps, NextPage, NextPageContext } from 'next';
import React from 'react';
import styled from 'styled-components';
import client from '../../client';
import { Container } from '../../components/atoms/Container';
import { SanityImage } from '../../components/atoms/SanityImage';
import { ShadowBox } from '../../components/atoms/ShadowBox';
import { H1 } from '../../components/atoms/Typography';
import { IngredientsList } from '../../components/ingredients/IngredientsList';
import { Method } from '../../components/Method';
import { RecipeInfo } from '../../components/RecipeInfo';
import * as t from '../../types/sanity';
import { recipeQuerySlug } from '../../utils/SanityQuery';

interface IProps extends NextPageContext {
    recipe: t.Recipe;
}

const Recipe: NextPage<IProps> = (props) => {
    const { mainImage, name, time, difficulty, ingredients, method } = props.recipe;
    return (
        <>
            {props.recipe && (
                <RecipeContainer>
                    {mainImage && <StyledSanityImage image={mainImage} />}
                    <HeadingBox>
                        <H1 size={'xl'}>{name}</H1>
                        <StyledRecipeInfo
                            time={time}
                            difficulty={difficulty}
                            ingredients={ingredients}
                        />
                    </HeadingBox>
                    <ContentWrapper>
                        <IngredientsList ingredients={ingredients} />
                        <Method methodSteps={method} />
                    </ContentWrapper>
                </RecipeContainer>
            )}
        </>
    );
};

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeadingBox = styled(ShadowBox)`
    max-width: 400px;
    width: 90%;
    align-self: center;
    text-align: center;
    position: relative;
    top: -70px;
    margin: 0 3rem;
    padding: 1.5rem;
`;

const ContentWrapper = styled(Container)`
    & > * {
        margin-bottom: 2em;
    }
`;
const StyledSanityImage = styled(SanityImage)`
    border-radius: 0 0 20px 20px;
    object-fit: cover;
    height: 40vh;
`;

const StyledRecipeInfo = styled(RecipeInfo)`
    max-width: 400px;
    width: 100%;
    margin: 1rem auto;
    & > * {
        flex: 1;
        justify-content: center;
    }
`;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    if (!req) {
        return { props: { recipe: undefined } };
    }
    const { slug = '' } = query;
    const recipe: t.Recipe = await client.fetch(recipeQuerySlug, { slug });
    return { props: { recipe } };
};

export default Recipe;
