export const categoryQuery = `*[_type == "category"] | order(name asc){
    _id,
    _type,
    name,
}`;

export const groceryQuery = `*[_type == "grocery"] | order(name asc){
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

export const recipeQuery = `*[_type == "recipe"]{
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
