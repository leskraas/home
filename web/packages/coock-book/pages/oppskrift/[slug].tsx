import React from 'react';
import {NextPage, NextPageContext} from "next";
import client from "../../client";

const recipeQuery = `*[_type == "recipe" && slug.current == $slug]{
    _id,
    _type,
    slug,
    difficulty,
    ingredients[]{
        _key,
        _type,
        name-> {
            ...
        }
    },
    mainImage{
        asset->{
            _id,
            url,
        }
    },
    method,
    name,
    serves,
    tags,
    time,
}[0]`;

const Recipe: NextPage = (props: any) => {
    console.log('test: ', props)
    return (
        <div>
            hei
        </div>
    );
};

Recipe.getInitialProps = async function (context: NextPageContext) {
    if (!context.req) {
        return { recipe: undefined };
    }
    const { slug = "" } = context.query;
    const recipe = await client.fetch(recipeQuery, { slug });
    console.log('recipe', recipe);
    return { recipe:  recipe};
};

export default Recipe;
