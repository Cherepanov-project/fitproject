export interface ISideBarCheckBoxStar {
    FiveStar: boolean
    FourStar: boolean
    ThreeStar: boolean
    TwoStar: boolean
    OneStar: boolean
}

export interface ISideBarCheckBoxMeals {
    Breakfast: boolean
    Snack: boolean
    Lunch: boolean
    Dinner: boolean
}
export interface ISpecificationItemsType {
    id: string
    name: string
    amount: number
}
export interface ISpecificationMealsType {
    id: string
    name: string
}

export interface ISpecificationStarType {
    id: number
    name: string
}

const initialValuesCheckBoxMeals: ISideBarCheckBoxMeals = {
    Breakfast: true,
    Snack: true,
    Lunch: true,
    Dinner: true,
}

const specificationItems: Array<ISpecificationItemsType> = [
    { id: "Salads", name: "Salads", amount: 320 },
    { id: "meat", name: "Meals with meat", amount: 320 },
    { id: "chicken", name: "Meals with chicken", amount: 320 },
    { id: "seafood", name: "Meals with seafood", amount: 320 },
]

const initialValuesCheckBoxStar: ISideBarCheckBoxStar = {
    FiveStar: true,
    FourStar: true,
    ThreeStar: true,
    TwoStar: true,
    OneStar: true,
}

const specificationMeals: Array<ISpecificationMealsType> = [
    { id: "Breakfast", name: "Breakfast" },
    { id: "Snack", name: "Snack" },
    { id: "Lunch", name: "Lunch" },
    { id: "Dinner", name: "Dinner" },
]

const specificationStar: Array<ISpecificationStarType> = [
    { id: 5, name: "FiveStar" },
    { id: 4, name: "FourStar" },
    { id: 3, name: "ThreeStar" },
    { id: 2, name: "TwoStar" },
    { id: 1, name: "OneStar" },
]

export {
    initialValuesCheckBoxMeals,
    specificationItems,
    initialValuesCheckBoxStar,
    specificationMeals,
    specificationStar,
}
