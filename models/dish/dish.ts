interface IIndigrientsType {
    indigrient: string
    quantity: number
}

interface INutritionalValueType {
    nutritiona: string
    value: number
    units: string
}
export interface IFoodItemType {
    id: string
    namesFood: string
    activeRecipe: boolean
    star: number
    activeIndigrients: boolean
    description: string
    indigrients: IIndigrientsType[]
    nutritionalValue: INutritionalValueType[]
}

const dishFood: IFoodItemType = {
    id: "Breakfast",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIndigrients: true,
    star: 5,
    description:
        "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    indigrients: [
        { indigrient: "chiken", quantity: 1 },
        { indigrient: "chiken", quantity: 1 },
        { indigrient: "chiken", quantity: 1 },
        { indigrient: "chiken", quantity: 1 },
        { indigrient: "chiken", quantity: 1 },
    ],
    nutritionalValue: [
        { nutritiona: "Calories", value: 350, units: "Kcal" },
        { nutritiona: "Protein", value: 15, units: "g" },
        { nutritiona: "Fats", value: 25, units: "g" },
        { nutritiona: "Carbs", value: 90, units: "g" },
    ],
}
const dishFoodAll: Array<IFoodItemType> = [
    {
        id: "Breakfast",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIndigrients: true,
        star: 5,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        indigrients: [
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
        ],
        nutritionalValue: [
            { nutritiona: "Calories", value: 350, units: "Kcal" },
            { nutritiona: "Protein", value: 15, units: "Prot" },
            { nutritiona: "Fats", value: 25, units: "Fats" },
            { nutritiona: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Morning Snack",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIndigrients: true,
        star: 4,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        indigrients: [
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
        ],
        nutritionalValue: [
            { nutritiona: "Calories", value: 350, units: "Kcal" },
            { nutritiona: "Protein", value: 15, units: "Prot" },
            { nutritiona: "Fats", value: 25, units: "Fats" },
            { nutritiona: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Lunch",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIndigrients: true,
        star: 3,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        indigrients: [
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
        ],
        nutritionalValue: [
            { nutritiona: "Calories", value: 350, units: "Kcal" },
            { nutritiona: "Protein", value: 15, units: "Prot" },
            { nutritiona: "Fats", value: 25, units: "Fats" },
            { nutritiona: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Afternoon Snack",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIndigrients: true,
        star: 2,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        indigrients: [
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
        ],
        nutritionalValue: [
            { nutritiona: "Calories", value: 350, units: "Kcal" },
            { nutritiona: "Protein", value: 15, units: "Prot" },
            { nutritiona: "Fats", value: 25, units: "Fats" },
            { nutritiona: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Dinner",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIndigrients: true,
        star: 1,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        indigrients: [
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
        ],
        nutritionalValue: [
            { nutritiona: "Calories", value: 350, units: "Kcal" },
            { nutritiona: "Protein", value: 15, units: "Prot" },
            { nutritiona: "Fats", value: 25, units: "Fats" },
            { nutritiona: "Carbs", value: 90, units: "Carbs" },
        ],
    },
    {
        id: "Dinner",
        namesFood: "Chicken Steak",
        activeRecipe: true,
        activeIndigrients: true,
        star: 5,
        description:
            "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
        indigrients: [
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
            { indigrient: "chiken", quantity: 1 },
        ],
        nutritionalValue: [
            { nutritiona: "Calories", value: 350, units: "Kcal" },
            { nutritiona: "Protein", value: 15, units: "Prot" },
            { nutritiona: "Fats", value: 25, units: "Fats" },
            { nutritiona: "Carbs", value: 90, units: "Carbs" },
        ],
    },
]

export { dishFood, dishFoodAll }
