import React from 'react';
import {NextPage, NextPageContext} from "next";
import client from "../../client";
import {IRecipe} from "../../types/sanity";
import styled from "styled-components";
import {SanityImage} from "../../shared/SanityImage";
import {Layout} from "../../components/Layout";
import {RecipeInfo} from "../../components/RecipeInfo";
import {recipeQuery} from "../../utils/SanityQuery";
import {Button} from "../../shared/Button";


interface IProps extends NextPageContext {
    // getInitialProps: (context: NextPageContext) => Promise<{}>
    recipe: IRecipe | undefined;
}


const Recipe: NextPage<IProps> = ({recipe}) => {
    console.log('test: ', recipe)
    return (
        <Layout>
            {recipe &&
            <RecipeContainer>
                <StyledSanityImage image={recipe.mainImage}/>
                <StyledRecipeInfo time={recipe.time} difficulty={recipe.difficulty} ingredients={recipe.ingredients}/>
                <Description>
                    {recipe.description}
                </Description>
                <Button>Ingrediesner</Button>
                <Button>Fremgangsmåte</Button>
            </RecipeContainer>
            }
        </Layout>
    );
};

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledSanityImage = styled(SanityImage)`
      border-radius: 0 0 20px 20px;
`;

const StyledRecipeInfo = styled(RecipeInfo)`
    max-width: 300px;
    width: 100%;
    margin: 1rem auto;
    & > * {
      flex: 1;
      justify-content: center;
    }
`;

const Description = styled.p`
      max-width: 400px;
      width: calc(100% - 2*3rem);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem;
`;


interface IRecipeContext extends NextPageContext {
    slug: string;
}


Recipe.getInitialProps = async ({query, req}: IRecipeContext) => {
    if (!req) {
        return {recipe: undefined};
    }
    const {slug = ""} = query;
    const recipe = await client.fetch(recipeQuery + "[0]", {slug});
    // console.log('recipe', recipe);
    return {recipe};
};

export default Recipe;
