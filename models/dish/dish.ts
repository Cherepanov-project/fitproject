import { IFoodItemType } from "../models.interface"


// Везде было quantity: 1
// Изменено на строку - для тестирования
export const dishFood: IFoodItemType = {
  id: "Breakfast",
  namesFood: "Chicken Steak",
  activeRecipe: true,
  activeIngredients: true,
  star: 5,
  description:
    "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
  ingredients: [
    { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
  ],
  nutritionValue: [
    { nutrition: "Calories", value: 350, units: "Kcal" },
    { nutrition: "Protein", value: 15, units: "g" },
    { nutrition: "Fats", value: 25, units: "g" },
    { nutrition: "Carbs", value: 90, units: "g" },
  ],
}
// Везде было quantity: 1
// Изменено на строку - для тестирования
export const dishFoodAll: Array<IFoodItemType> = [
  {
    id: "Breakfast",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIngredients: true,
    star: 5,
    description:
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    ],
    nutritionValue: [
      { nutrition: "Calories", value: 350, units: "Kcal" },
      { nutrition: "Protein", value: 15, units: "Prot" },
      { nutrition: "Fats", value: 25, units: "Fats" },
      { nutrition: "Carbs", value: 90, units: "Carbs" },
    ],
  },
  {
    id: "Snack",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIngredients: true,
    star: 4,
    description:
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
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
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    ],
    nutritionValue: [
      { nutrition: "Calories", value: 350, units: "Kcal" },
      { nutrition: "Protein", value: 15, units: "Prot" },
      { nutrition: "Fats", value: 25, units: "Fats" },
      { nutrition: "Carbs", value: 90, units: "Carbs" },
    ],
  },
  {
    id: "Snack",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIngredients: true,
    star: 2,
    description:
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
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
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
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
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    ],
    nutritionValue: [
      { nutrition: "Calories", value: 350, units: "Kcal" },
      { nutrition: "Protein", value: 15, units: "Prot" },
      { nutrition: "Fats", value: 25, units: "Fats" },
      { nutrition: "Carbs", value: 90, units: "Carbs" },
    ],
  },
  {
    id: "Snack",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIngredients: true,
    star: 4,
    description:
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
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
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    ],
    nutritionValue: [
      { nutrition: "Calories", value: 350, units: "Kcal" },
      { nutrition: "Protein", value: 15, units: "Prot" },
      { nutrition: "Fats", value: 25, units: "Fats" },
      { nutrition: "Carbs", value: 90, units: "Carbs" },
    ],
  },
  {
    id: "Snack",
    namesFood: "Chicken Steak",
    activeRecipe: true,
    activeIngredients: true,
    star: 2,
    description:
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
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
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
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
      "Chicken Steak TableItemRecipes With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    ingredients: [
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
      { ingredient: "chicken", quantity: "1 Chicken Breast piece" },
    ],
    nutritionValue: [
      { nutrition: "Calories", value: 350, units: "Kcal" },
      { nutrition: "Protein", value: 15, units: "Prot" },
      { nutrition: "Fats", value: 25, units: "Fats" },
      { nutrition: "Carbs", value: 90, units: "Carbs" },
    ],
  },
]
