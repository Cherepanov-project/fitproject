export interface IDailyRationType {
    id: string
    calories: number
    nutritionValues: number
    food: string
    active: boolean
}

const dailyRation: IDailyRationType[] = [
    {
        id: "Breakfast",
        calories: 1000,
        nutritionValues: 1000,
        food: "chicken",
        active: false,
    },
    {
        id: "Morning snack",
        calories: 1000,
        nutritionValues: 1000,
        food: "chicken",
        active: false,
    },
    {
        id: "Lunch",
        calories: 1000,
        nutritionValues: 1000,
        food: "chicken",
        active: false,
    },
    {
        id: "Afternoon snack",
        calories: 1000,
        nutritionValues: 1000,
        food: "chicken",
        active: false,
    },
    {
        id: "Dinner",
        calories: 1000,
        nutritionValues: 1000,
        food: "chicken",
        active: false,
    },
]

export { dailyRation }
