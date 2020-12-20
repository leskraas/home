export type Difficulty = 'Enkel' | 'Middels' | 'Middels';

export type Recipe = {
    _type: 'recipe';
    _id: string;
    slug: Slug;
    difficulty: Difficulty;
    ingredients: Ingredient[];
    mainImage?: Image;
    method: MethodStep[];
    name: string;
    serves: number;
    tags: Category[];
    time: Time;
    description?: string;
};

export type MethodStep = {
    _type: 'methodStep';
    _key: string;
    stepIngredients?: string[];
    stepText: string;
};

export type Ingredient = {
    _type: 'ingredient';
    _key: string;
    name: Grocery;
    quantity: Quantity;
    extendedText?: string;
};

export type Quantity = {
    amount: number;
    unit: 'ss' | 'ts' | 'dl' | 'ml' | 'l' | 'g' | 'stykk' | 'boks';
};

export type Time = {
    hour: number;
    minutes: number;
};

export type Slug = {
    _type: 'slug';
    current: string;
};

export type Image = {
    _type: 'image';
    _id?: string;
    _key: string;
    asset: Asset;
    crop?: Crop;
    hotspot?: Hotspot;
};

type Asset = {
    _ref: string;
    _type: 'reference';
    _id?: string;
};

type Crop = {
    _type: 'sanity.imageCrop';
    bottom: number;
    left: number;
    right: number;
    top: number;
};

type Hotspot = {
    _type: 'sanity.imageHotspot';
    height: number;
    width: number;
    x: number;
    y: number;
};

export type Category = {
    _id: string;
    _type: 'category';
    name: string;
};

export type Grocery = {
    _id: string;
    _type: 'grocery';
    image: Image;
    isFromKitchen: boolean;
    name: string;
};
