import groq from 'groq';

export const categoryQuery = groq`*[_type == "category"] | order(name asc){
    _id,
    name,
}`;

export const groceryQuery = groq`*[_type == "grocery"] | order(name asc){
    _id,
    isFromKitchen,
    name,
}`;

export const recipeQuery = groq`*[_type == "recipe"]{
    _id,
    slug,
    difficulty,
    description,
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
}`;
export const recipeInspoQuery = groq`*[_type == "recipe"]{
    _id,
    slug,
    difficulty,
    ingredients[]{
        _key,
        name
    },
    mainImage{
        asset->{
            _id,
            url,
        }
    },
    name,
    serves,
    time,
}[0...10]`;

export const recipeShortQuery = groq`*[_type == "recipe"]{
    _id,
    slug,
    name,
}`;

export const recipeQuerySlug = groq`*[_type == "recipe" && slug.current == $slug]{
    _id,
    slug,
    difficulty,
    description,
    ingredients[]{
        _key,
        _type,
        name-> {
            ...,
        },
        quantity,
        extendedText
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
