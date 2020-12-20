import groq from 'groq';

export const categoryQuery = groq`*[_type == "category"] | order(name asc){
    _id,
    _type,
    name,
}`;

export const groceryQuery = groq`*[_type == "grocery"] | order(name asc){
    _id,
    _type,
    image{
        assets->{
            _id,
            url
        }
    },
    isFromKitchen,
    name,
}`;

export const recipeQuery = groq`*[_type == "recipe"]{
    _id,
    _type,
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

export const recipeQuerySlug = groq`*[_type == "recipe" && slug.current == $slug]{
    _id,
    _type,
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
