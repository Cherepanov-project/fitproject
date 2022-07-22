export interface IPutRecipe {
    id: number;
    description: string;
    picUrl: string;
}

export interface IPostRecipe {
    name: string
    description: string
    picUrl: string;
}

export interface IPostWorkout {
    name: string
    description: string
}

export interface IPutRecipeName {
    id: number,
    name: string
}