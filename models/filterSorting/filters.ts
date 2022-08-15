export const recipeSortingFilters = [
    {
        name: "No Sorting",
        sorting: "none"
    },
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

export const workoutSortingFilters = [
    {
        name: "No Sorting",
        sorting: "none"
    },
    {
        name: "Name",
        sorting: "name"
    }
]

export const articlesSortingFilters = [
    {
        name: "No Sorting",
        sorting: "none"
    },
    {
        name: 'Priority',
        sorting: 'priority'
    },
    {
        name: 'Created',
        sorting: 'created'
    },
]


export const recipeFilterOptions = [
    "Calorie",
    "Protein",
    "Category"
]
export const recipeSubOptions = {
    CALORIE: ["1500", "2500", "3500" ],
    PROTEIN: ["200", "300", "400"],
    CATEGORY: [] //добавить значения mealtype, пока что с сервера это не приходит
}


export const workoutFilterOptions = [
    "Category",
    "Area",
    "Type"
]
export const workoutSubOptions = {
    CATEGORY: ["cardio", "strength" ],
    AREA: ["legs", "chest", "breast", "arms"],
    TYPE: []
}