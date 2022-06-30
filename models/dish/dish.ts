interface IIngredientsType {
    ingredient: string
    quantity: number
}

interface INutritionValueType {
    nutrition: string
    value: number
    units: string
}
export interface IFoodItemType {
    id: string
    namesFood: string
    activeRecipe: boolean
    star: number
    activeIngredients: boolean
    description: string
    ingredients: IIngredientsType[]
    nutritionValue: INutritionValueType[]
}

const dishFood: IFoodItemType = {
    id: "Breakfast",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIngredients: true,
    star: 5,
    description:
        "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
        { ingredient: "chicken", quantity: 1 },
        { ingredient: "chicken", quantity: 1 },
        { ingredient: "chicken", quantity: 1 },
        { ingredient: "chicken", quantity: 1 },
        { ingredient: "chicken", quantity: 1 },
    ],
    nutritionValue: [
        { nutrition: "Calories", value: 350, units: "Kcal" },
        { nutrition: "Protein", value: 15, units: "g" },
        { nutrition: "Fats", value: 25, units: "g" },
        { nutrition: "Carbs", value: 90, units: "g" },
    ],
}
const dishFoodAll: Array<IFoodItemType> = [
    {
        id: "Breakfast",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIngredients: true,
        star: 5,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        ingredients: [
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
        ],
        nutritionValue: [
            { nutrition: "Calories", value: 350, units: "Kcal" },
            { nutrition: "Protein", value: 15, units: "Prot" },
            { nutrition: "Fats", value: 25, units: "Fats" },
            { nutrition: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Morning Snack",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIngredients: true,
        star: 4,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        ingredients: [
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
        ],
        nutritionValue: [
            { nutrition: "Calories", value: 350, units: "Kcal" },
            { nutrition: "Protein", value: 15, units: "Prot" },
            { nutrition: "Fats", value: 25, units: "Fats" },
            { nutrition: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Lunch",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIngredients: true,
        star: 3,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        ingredients: [
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
        ],
        nutritionValue: [
            { nutrition: "Calories", value: 350, units: "Kcal" },
            { nutrition: "Protein", value: 15, units: "Prot" },
            { nutrition: "Fats", value: 25, units: "Fats" },
            { nutrition: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Afternoon Snack",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIngredients: true,
        star: 2,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        ingredients: [
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
        ],
        nutritionValue: [
            { nutrition: "Calories", value: 350, units: "Kcal" },
            { nutrition: "Protein", value: 15, units: "Prot" },
            { nutrition: "Fats", value: 25, units: "Fats" },
            { nutrition: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Dinner",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIngredients: true,
        star: 1,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        ingredients: [
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
        ],
        nutritionValue: [
            { nutrition: "Calories", value: 350, units: "Kcal" },
            { nutrition: "Protein", value: 15, units: "Prot" },
            { nutrition: "Fats", value: 25, units: "Fats" },
            { nutrition: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Dinner",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIngredients: true,
        star: 5,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        ingredients: [
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
            { ingredient: "chicken", quantity: 1 },
        ],
        nutritionValue: [
            { nutrition: "Calories", value: 350, units: "Kcal" },
            { nutrition: "Protein", value: 15, units: "Prot" },
            { nutrition: "Fats", value: 25, units: "Fats" },
            { nutrition: "Carbs", value: 90, units: "Carbs" },
        ],
    },
]

export { dishFood, dishFoodAll }
