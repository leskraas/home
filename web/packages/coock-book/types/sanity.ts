
export interface IRecipe {
    _id: string;
    _type:'recipe';
    slug: ISlug;
    difficulty: 'Enkel'| 'Middels'| 'Middels';
    ingredients: IIngredient[];
    mainImage?: IImage;
    method: IMethodStep[];
    name: string;
    serves: number;
    tags: ICategory[];
    time: ITime;
}


export interface IMethodStep {
    _key:string;
    _type:'methodStep';
    stepIngredients?: string[];
    stepText:string;
}

export interface IIngredient {
    _type: 'ingredient';
    _key: string;
    name: IGrocery;
    quantity: IQuantity;
    extendedText?: string;
}

export interface IQuantity {
    amount: number;
    unit: 'ss' | 'ts' | 'dl' | 'ml' | 'l' | 'g' | 'stykk' | 'boks';
}

export interface ITime {
    hour: number;
    minutes: number;
}

export interface ISlug {
    _type: 'slug';
    current: string;
}

export interface IImage {
    _type: 'image';
    _id?: string;
    _key: string;
    asset: IAsset;
    crop?: ICrop;
    hotspot?: IHotspot;
}

interface IAsset {
    _ref: string;
    _type: 'reference';
    _id?: string;
}

interface ICrop {
    _type: 'sanity.imageCrop';
    bottom: number;
    left: number;
    right: number;
    top: number;
}

interface IHotspot {
    _type: 'sanity.imageHotspot';
    height: number;
    width: number;
    x: number;
    y: number;
}

export interface ICategory {
    _id: string;
    _type: 'category';
    name: string;
}

export interface IGrocery {
    _id: string
    _type: "grocery"
    image: IImage
    isFromKitchen: boolean
    name: string
}
