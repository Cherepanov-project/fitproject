export interface IndigrientsType {
  indigrient: string;
  quantity: number;
}

export interface NutritionalValueType {
  nutritiona: string;
  value: number;
  units: string;
}
export interface FoodItemType {
  namesFood: string;
  activeRecipe: boolean;
  activeIndigrients: boolean;
  description: string;
  indigrients: IndigrientsType[];
  nutritionalValue: NutritionalValueType[];
}
export const dishFood: FoodItemType = {
  namesFood: "Chicken Steak",
  activeRecipe: true,
  activeIndigrients: true,
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
};
