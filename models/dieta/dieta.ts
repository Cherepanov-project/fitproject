export interface IDailyRationType {
    id: string
    callories: number
    natritionValues: number
    food: string
    active: boolean
}

const dailyRation: IDailyRationType[] = [
    {
        id: "Breakfast",
        callories: 1000,
        natritionValues: 1000,
        food: "chiken",
        active: false,
    },
    {
        id: "Morning snack",
        callories: 1000,
        natritionValues: 1000,
        food: "chiken",
        active: false,
    },
    {
        id: "Lunch",
        callories: 1000,
        natritionValues: 1000,
        food: "chiken",
        active: false,
    },
    {
        id: "Afternoon snack",
        callories: 1000,
        natritionValues: 1000,
        food: "chiken",
        active: false,
    },
    {
        id: "Dinner",
        callories: 1000,
        natritionValues: 1000,
        food: "chiken",
        active: false,
    },
]

export { dailyRation }
