export interface exercisesType {
  id: number;
  name: string;
  exercise: string;
  move: number;
  repeat: number;
  area: string;
}

export interface categoriesListType {
  name: string;
  value: number;
}

export interface muscleCheckboxListType {
  Arms: boolean;
  Legs: boolean;
  Breast: boolean;
  Chest: boolean;
}

export interface muscleGroupListType {
  name: string
}

export const exerciseList: exercisesType[] = [
  {
    id: 0,
    name: "Plank Up-Down",
    exercise: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
    move: 3,
    repeat: 15,
    area: 'Back'
  },
  {
    id: 1,
    name: "Plank Up-Down",
    exercise: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
    move: 3,
    repeat: 15,
    area: 'Back'
  },
  {
    id: 2,
    name: "Plank Up-Down",
    exercise: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
    move: 3,
    repeat: 10,
    area: 'Back'
  },
  {
    id: 3,
    name: "Plank Up-Down",
    exercise: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
    move: 3,
    repeat: 15,
    area: 'Back'
  },
  {
    id: 4,
    name: "Plank Up-Down",
    exercise: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
    move: 3,
    repeat: 15,
    area: 'Back'
  },
  {
    id: 5,
    name: "Plank Up-Down",
    exercise: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
    move: 3,
    repeat: 15,
    area: 'Back'
  },
];

export const categoriesList: categoriesListType[] = [
  {name: 'Cardio', value: 320},
  {name: 'Yoga', value: 112},
  {name: 'Stretching', value: 32},
  {name: 'Power', value: 48}
]

export const muscleCheckboxList: muscleCheckboxListType = {
  Arms: true,
  Legs: true,
  Breast: true,
  Chest: true
}

export const muscleGroupList: muscleGroupListType[] = [
  {name: 'Arms'},
  {name: 'Legs'},
  {name: 'Breast'},
  {name: 'Chest'}
]