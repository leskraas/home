import groq from 'groq';
import { Recipe, RecipeMain, RecipeShort } from '../types/sanity';
import client from './sanity';

const recipeMainFields = `
    _id,
    slug,
    name,
`;
const recipeCommenFields = `
    ${recipeMainFields}
    difficulty,
    mainImage {
        asset->{
            _id,
            url,
        }
    },
    serves,
    time,
`;

const recipeShortFields = `
    ${recipeCommenFields}
    ingredients[]{
         _key,
        name
    },
`;

const recipeFields = `
    ${recipeCommenFields}
    description,
    ingredients[]{
        _key,
        _type,
        quantity,
        extendedText,
        name-> {
            ...
        }
    },
    method,
    tags,
`;

export const getRecipeBySlug: (slug: string | string[] | undefined) => Promise<Recipe> = async (
    slug
) => {
    return await client.fetch(
        groq`*[_type == "recipe" && slug.current == $slug] | order(date desc){
      ${recipeFields}
    }[0]`,
        { slug }
    );
};
export const getAllRecipeWithMain: () => Promise<RecipeMain[]> = async () => {
    return await client.fetch(
        groq`*[_type == "recipe"] | order(date desc){
      ${recipeMainFields}
    }`,
        {}
    );
};

export const getAllRecipeShort: () => Promise<RecipeShort[]> = async () => {
    return await client.fetch(
        groq`*[_type == "recipe"] | order(date desc){
      ${recipeShortFields}
    }`,
        {}
    );
};

export const getAllRecipeWithSlug: () => Promise<{ slug: string }[]> = async () => {
    const data: { slug: string }[] = await client.fetch(
        groq`*[_type == "recipe"]{ 'slug': slug.current }`,
        {}
    );
    return data;
};
