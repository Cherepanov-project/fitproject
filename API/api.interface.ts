export interface IPutRecipe {
    id: number
    description: string
}

export interface IPostRecipe {
    name: string
    description: string
}

export interface IPostWorkout {
    name: string
    description: string
}

export interface IPostUser {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    phone: string
    age: number
    gender: string
}

export interface IPutUser {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    phone: string
    age: number
    gender: string
}
