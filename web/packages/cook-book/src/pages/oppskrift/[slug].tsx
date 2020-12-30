import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/atoms/Container';
import { MotionDiv } from '../../components/atoms/MotionDiv';
import { SanityImage } from '../../components/atoms/SanityImage';
import { ShadowBox } from '../../components/atoms/ShadowBox';
import { H1 } from '../../components/atoms/Typography';
import { IngredientsList } from '../../components/ingredients/IngredientsList';
import { Method } from '../../components/Method';
import { RecipeInfo } from '../../components/RecipeInfo';
import { getAllRecipeWithSlug, getRecipeBySlug } from '../../lib/api';
import * as t from '../../types/sanity';
import { fadeIn, fadeInDown, fadeInUp, stagger } from '../../utils/Animations';

type Props = {
    recipe: t.Recipe | null;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const data = await getRecipeBySlug(params?.slug);
    return { props: { recipe: data || null } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allRecipes = await getAllRecipeWithSlug();
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
    const router = useRouter();
    if (!router.isFallback && !props.recipe?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    const { recipe } = props;
    return (
        <>
            {router.isFallback ? (
                <H1 size={'xl'}>Laster ...</H1>
            ) : (
                recipe && (
                    <RecipeContainer initial="initial" animate="animate" exit={{ opacity: 0 }}>
                        <MotionDiv variants={fadeIn}>
                            {recipe.mainImage && <StyledSanityImage image={recipe.mainImage} />}
                        </MotionDiv>
                        <MotionDiv variants={stagger}>
                            <MotionDiv variants={fadeInDown}>
                                <HeadingBox>
                                    <H1 size={'xl'}>{recipe.name}</H1>
                                    <StyledRecipeInfo
                                        time={recipe.time}
                                        difficulty={recipe.difficulty}
                                        ingredients={recipe.ingredients}
                                    />
                                </HeadingBox>
                            </MotionDiv>
                            <ContentWrapper>
                                <MotionDiv variants={fadeInUp}>
                                    <IngredientsList ingredients={recipe.ingredients} />
                                </MotionDiv>
                                <MotionDiv variants={fadeInUp}>
                                    <Method methodSteps={recipe.method} />
                                </MotionDiv>
                            </ContentWrapper>
                        </MotionDiv>
                    </RecipeContainer>
                )
            )}
        </>
    );
};

const RecipeContainer = styled(motion.div)`
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

export default Recipe;
