export interface IPutRecipe {
    id: number;
    description: string;
}

export interface IGetRecipeById {
    id: number
}

export interface IPostRecipe {
    name: string
    description: string
}
