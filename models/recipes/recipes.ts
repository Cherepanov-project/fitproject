export interface IIngredient {
    name: string
    description: string
}

export interface INutritionValues {
    name: string
    calories: number
    fats: number
    carbs: number
    protein: number
}

export interface INutrilon {
    name: string
    formik: string
}

const nutrilonsMapped = [
    { name: "Carbs", formik: "carbs" },
    { name: "Proteins", formik: "proteins" },
    { name: "Fats", formik: "fats" },
    { name: "Calories", formik: "calories" },
]

const recipesValues = {
    headerText: "",
    shortDescriptionText: "",
    chip: [],
    ingredients: [
        {
            name: "",
            description: "",
        },
    ],
    calories: "",
    protein: "",
    fats: "",
    carbs: "",
    text: "",
    files: [],
}

export { nutrilonsMapped, recipesValues }
