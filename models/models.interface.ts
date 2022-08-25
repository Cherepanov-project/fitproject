export interface IHeaderCardsDataTypes {
    name: string
    value: string
}

export interface ITrendsCardsDataTypes {
    name: string
    value: string
}

export interface IColors {
    nameColor: string
    valueColor: string
    borderColor: string
}

export interface IDailyRationType {
    id: string
    calories: number
    nutritionValues: number
    food: string
    active: boolean
}

export interface IIngredientsType {
  ingredient: string
  //quantity: number
  // изменено на string для тестирования
  quantity: string
}

export interface INutritionValueType {
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

export interface IGraphDataType {
    name: string
    uv: number
    pv: number
}

export interface IArticle {
    id: number,
    priority: 'Normal' | 'High' | 'Low',
    avatar: string,
    username: string,
    created: string,
    updated: string,
    title: string,
}