interface IResipe {
    id: number
    name: string
    description: string
    calorie: number
    protein: number
    fat: number
    carbohydrate: number
    products: any[]
}
export interface IRecipesArr {
    data: IResipe[]
}

export const contentList = [
    {
        id: "573588",
        name: "Oatmeal",
        uniqueRecipeField: { portionSize: 120, type: "Porridge" },
        status: "HIGH",
        calories: 84,
        proteins: 3,
        fats: 2,
        carbohydrates: 15,
    },
    {
        id: "573592",
        name: "Casserole",
        uniqueRecipeField: { portionSize: 110, type: "Casserole" },
        status: "LOW",
        calories: 148,
        proteins: 30,
        fats: 16,
        carbohydrates: 2,
    },
    {
        id: "573553",
        name: "Wheat porridge",
        uniqueRecipeField: { portionSize: 150, type: "Porridge" },
        status: "NORMAL",
        calories: 111,
        proteins: 4,
        fats: 3,
        carbohydrates: 26,
    },
    {
        id: "573565",
        name: "Fish salad",
        uniqueRecipeField: { portionSize: 90, type: "Salad" },
        status: "HIGH",
        calories: 103,
        proteins: 22,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "573500",
        name: "Vegetable salad",
        uniqueRecipeField: { portionSize: 100, type: "Salad" },
        status: "LOW",
        calories: 30,
        proteins: 2,
        fats: 0,
        carbohydrates: 29,
    },
    {
        id: "573600",
        name: "Minestrone",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 104,
        proteins: 3,
        fats: 5,
        carbohydrates: 12,
    },
    {
        id: "573700",
        name: "Fish soup",
        uniqueRecipeField: { portionSize: 190, type: "Soup" },
        status: "NORMAL",
        calories: 146,
        proteins: 20,
        fats: 5,
        carbohydrates: 6,
    },
    {
        id: "573900",
        name: "Chicken  broth",
        uniqueRecipeField: { portionSize: 180, type: "Soup" },
        status: "HIGH",
        calories: 10,
        proteins: 1,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "573850",
        name: "Beef broth",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 130,
        proteins: 18,
        fats: 6,
        carbohydrates: 3,
    },
    {
        id: "653588",
        name: "Oatmeal",
        uniqueRecipeField: { portionSize: 120, type: "Porridge" },
        status: "HIGH",
        calories: 84,
        proteins: 3,
        fats: 2,
        carbohydrates: 15,
    },
    {
        id: "503592",
        name: "Casserole",
        uniqueRecipeField: { portionSize: 110, type: "Casserole" },
        status: "LOW",
        calories: 148,
        proteins: 30,
        fats: 16,
        carbohydrates: 2,
    },
    {
        id: "558553",
        name: "Wheat porridge",
        uniqueRecipeField: { portionSize: 150, type: "Porridge" },
        status: "NORMAL",
        calories: 111,
        proteins: 4,
        fats: 3,
        carbohydrates: 26,
    },
    {
        id: "530565",
        name: "Fish salad",
        uniqueRecipeField: { portionSize: 90, type: "Salad" },
        status: "HIGH",
        calories: 103,
        proteins: 22,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "527500",
        name: "Vegetable salad",
        uniqueRecipeField: { portionSize: 100, type: "Salad" },
        status: "LOW",
        calories: 30,
        proteins: 2,
        fats: 0,
        carbohydrates: 29,
    },
    {
        id: "586600",
        name: "Minestrone",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 104,
        proteins: 3,
        fats: 5,
        carbohydrates: 12,
    },
    {
        id: "511700",
        name: "Fish soup",
        uniqueRecipeField: { portionSize: 190, type: "Soup" },
        status: "NORMAL",
        calories: 146,
        proteins: 20,
        fats: 5,
        carbohydrates: 6,
    },
    {
        id: "599900",
        name: "Chicken  broth",
        uniqueRecipeField: { portionSize: 180, type: "Soup" },
        status: "HIGH",
        calories: 10,
        proteins: 1,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "515850",
        name: "Beef broth",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 130,
        proteins: 18,
        fats: 6,
        carbohydrates: 3,
    },
    {
        id: "433588",
        name: "Oatmeal",
        uniqueRecipeField: { portionSize: 120, type: "Porridge" },
        status: "HIGH",
        calories: 84,
        proteins: 3,
        fats: 2,
        carbohydrates: 15,
    },
    {
        id: "113592",
        name: "Casserole",
        uniqueRecipeField: { portionSize: 110, type: "Casserole" },
        status: "LOW",
        calories: 148,
        proteins: 30,
        fats: 16,
        carbohydrates: 2,
    },
    {
        id: "863553",
        name: "Wheat porridge",
        uniqueRecipeField: { portionSize: 150, type: "Porridge" },
        status: "NORMAL",
        calories: 111,
        proteins: 4,
        fats: 3,
        carbohydrates: 26,
    },
    {
        id: "993565",
        name: "Fish salad",
        uniqueRecipeField: { portionSize: 90, type: "Salad" },
        status: "HIGH",
        calories: 103,
        proteins: 22,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "333500",
        name: "Vegetable salad",
        uniqueRecipeField: { portionSize: 100, type: "Salad" },
        status: "LOW",
        calories: 30,
        proteins: 2,
        fats: 0,
        carbohydrates: 29,
    },
    {
        id: "233600",
        name: "Minestrone",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 104,
        proteins: 3,
        fats: 5,
        carbohydrates: 12,
    },
    {
        id: "323700",
        name: "Fish soup",
        uniqueRecipeField: { portionSize: 190, type: "Soup" },
        status: "NORMAL",
        calories: 146,
        proteins: 20,
        fats: 5,
        carbohydrates: 6,
    },
    {
        id: "163900",
        name: "Chicken  broth",
        uniqueRecipeField: { portionSize: 180, type: "Soup" },
        status: "HIGH",
        calories: 10,
        proteins: 1,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "613850",
        name: "Beef broth",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 130,
        proteins: 18,
        fats: 6,
        carbohydrates: 3,
    },
    {
        id: "453588",
        name: "Oatmeal",
        uniqueRecipeField: { portionSize: 120, type: "Porridge" },
        status: "HIGH",
        calories: 84,
        proteins: 3,
        fats: 2,
        carbohydrates: 15,
    },
    {
        id: "443592",
        name: "Casserole",
        uniqueRecipeField: { portionSize: 110, type: "Casserole" },
        status: "LOW",
        calories: 148,
        proteins: 30,
        fats: 16,
        carbohydrates: 2,
    },
    {
        id: "668553",
        name: "Wheat porridge",
        uniqueRecipeField: { portionSize: 150, type: "Porridge" },
        status: "NORMAL",
        calories: 111,
        proteins: 4,
        fats: 3,
        carbohydrates: 26,
    },
    {
        id: "980565",
        name: "Fish salad",
        uniqueRecipeField: { portionSize: 90, type: "Salad" },
        status: "HIGH",
        calories: 103,
        proteins: 22,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "267500",
        name: "Vegetable salad",
        uniqueRecipeField: { portionSize: 100, type: "Salad" },
        status: "LOW",
        calories: 30,
        proteins: 2,
        fats: 0,
        carbohydrates: 29,
    },
    {
        id: "376600",
        name: "Minestrone",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 104,
        proteins: 3,
        fats: 5,
        carbohydrates: 12,
    },
    {
        id: "271700",
        name: "Fish soup",
        uniqueRecipeField: { portionSize: 190, type: "Soup" },
        status: "NORMAL",
        calories: 146,
        proteins: 20,
        fats: 5,
        carbohydrates: 6,
    },
    {
        id: "500900",
        name: "Chicken  broth",
        uniqueRecipeField: { portionSize: 180, type: "Soup" },
        status: "HIGH",
        calories: 10,
        proteins: 1,
        fats: 1,
        carbohydrates: 1,
    },
    {
        id: "600850",
        name: "Beef broth",
        uniqueRecipeField: { portionSize: 200, type: "Soup" },
        status: "HIGH",
        calories: 130,
        proteins: 18,
        fats: 6,
        carbohydrates: 3,
    },
]
