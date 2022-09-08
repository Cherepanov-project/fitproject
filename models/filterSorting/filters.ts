export type FilterOptions = string[];

interface IFilterCheckbox {
    [key: string]: boolean;
}

type FilterNumerical = [number, number]

export type FilterSubOption = FilterNumerical | IFilterCheckbox

export interface IFilters {
    [key: string]: FilterSubOption | []
}

export type SortingOption = ISortingOptionType[]

export interface ISortingOptionType {
    name: string;
    sorting: string;
}

export const recipeSortingFilters: SortingOption = [
    {
        name: "Calories",
        sorting: "calorie"
    },
    {
        name: "Protein",
        sorting: "protein"
    },
    {
        name: "Carbohydrates",
        sorting: "carbohydrate"
    },
    {
        name: "Fat",
        sorting: "fat"
    },
    {
        name: "Name",
        sorting: "name"
    }
]

export const workoutSortingFilters: SortingOption = [
    {
        name: "Name",
        sorting: "name"
    },
    {
        name: "Repeat",
        sorting: "repeat"
    }
]

export const articlesSortingFilters: SortingOption = [
    {
        name: 'Created',
        sorting: 'created'
    },
]

export const recipeFilterOptions: FilterOptions = [
    "Calorie",
    "Protein",
    "Category"
]

export const articlesFilterOptions: FilterOptions = [
    "Priority"
]

export const workoutFilterOptions: FilterOptions = [
    "Category",
    "Area",
    "Repeat Count"
]

export const recipeSubOptions: IFilters = {
    calorie: [],
    protein: [],
    category: {
        high: false,
        low: false
    } //добавить значения mealtype, пока что с сервера это не приходит
}

export const articlesSubOptions: IFilters = {
    priority: {
        High: false,
        Normal: false,
        Low: false
    },
}

export const workoutSubOptions: IFilters = {
    category: {
        Cardio: false,
        Strength: false
    },
    area: {
        Legs: false, Chest: false, Breast: false, Arms: false
    },
    repeatCount: []
}