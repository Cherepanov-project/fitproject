export interface SideBarCheckBoxStar {
  FiveStar: boolean;
  FourStar: boolean;
  ThreeStar: boolean;
  TwoStar: boolean;
  OneStar: boolean;
}

export interface SideBarCheckBoxMeals {
  Breakfast: boolean;
  Snack: boolean;
  Lunch: boolean;
  Dinner: boolean;
}
export interface SpecificationItemsType {
  id: string;
  name: string;
  amount: number;
}
export interface specificationMealsType {
  id: string;
  name: string;
}

export interface specificationStarType {
  id: number;
  name: string;
}

export const initialValuesCheckBoxMeals: SideBarCheckBoxMeals = {
  Breakfast: true,
  Snack: true,
  Lunch: true,
  Dinner: true,
};

export const specificationItems: Array<SpecificationItemsType> = [
  { id: 'Salads', name: 'Salads', amount: 320 },
  { id: 'meat', name: 'Meals with meat', amount: 320 },
  { id: 'chicken', name: 'Meals with chicken', amount: 320 },
  { id: 'seafood', name: 'Meals with seafood', amount: 320 },
];

export const initialValuesCheckBoxStar: SideBarCheckBoxStar = {
  FiveStar: true,
  FourStar: true,
  ThreeStar: true,
  TwoStar: true,
  OneStar: true,
};
export const specificationMeals: Array<specificationMealsType> = [
  { id: 'Breakfast', name: 'Breakfast' },
  { id: 'Snack', name: 'Snack' },
  { id: 'Lunch', name: 'Lunch' },
  { id: 'Dinner', name: 'Dinner' },
];

export const specificationStar: Array<specificationStarType> = [
  { id: 5, name: 'FiveStar' },
  { id: 4, name: 'FourStar' },
  { id: 3, name: 'ThreeStar' },
  { id: 2, name: 'TwoStar' },
  { id: 1, name: 'OneStar' },
];
