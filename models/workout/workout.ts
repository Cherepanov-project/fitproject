export interface exercisesType {
    id: number
    name: string
    exercise: string
    move: number
    repeat: number
    category?: string
    approachCount?: number
    repeatCount?: number
    area: string
    muscles: string[]
    img: string
    imgWidth: number
    imgHeight: number
}

export interface categoriesListType {
    name: string
    value: number
}

export interface muscleCheckboxListType {
    Arms: boolean
    Legs: boolean
    Breast: boolean
    Chest: boolean
}

export interface muscleGroupListType {
    name: string
}

export interface IWorkoutEditProps {
    id?: string
}

export const exerciseList: exercisesType[] = [
    {
        id: 0,
        name: "Exercise",
        exercise:
            "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
        move: 3,
        repeat: 15,
        area: "Chest",
        muscles: [
            "Latissimus dorsi",
            "The trapezius",
            "Levator scapulae",
            "Rhomboids",
        ],
        img: "/exercises/fours.jpg",
        imgWidth: 175,
        imgHeight: 148,
    },
    {
        id: 1,
        name: "Exercise",
        exercise:
            "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
        move: 3,
        repeat: 15,
        area: "Chest",
        muscles: [
            "Latissimus dorsi",
            "The trapezius",
            "Levator scapulae",
            "Rhomboids",
        ],
        img: "/exercises/hands_up_on_socks.jpg",
        imgWidth: 172,
        imgHeight: 266,
    },
    {
        id: 2,
        name: "Exercise",
        exercise:
            "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
        move: 3,
        repeat: 10,
        area: "Chest",
        muscles: [
            "Latissimus dorsi",
            "The trapezius",
            "Levator scapulae",
            "Rhomboids",
        ],
        img: "/exercises/just_position.jpg",
        imgWidth: 224,
        imgHeight: 120,
    },
    {
        id: 3,
        name: "Exercise",
        exercise:
            "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
        move: 3,
        repeat: 15,
        area: "Chest",
        muscles: [
            "Latissimus dorsi",
            "The trapezius",
            "Levator scapulae",
            "Rhomboids",
        ],
        img: "/exercises/press.jpg",
        imgWidth: 212,
        imgHeight: 159,
    },
    {
        id: 4,
        name: "Exercise",
        exercise:
            "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
        move: 3,
        repeat: 15,
        area: "Arms",
        muscles: [
            "Latissimus dorsi",
            "The trapezius",
            "Levator scapulae",
            "Rhomboids",
        ],
        img: "/workouts/push_ups.jpg",
        imgWidth: 270,
        imgHeight: 166,
    },
    {
        id: 5,
        name: "Exercise",
        exercise:
            "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Place your feet hip-width apart.",
        move: 3,
        repeat: 15,
        area: "Arms",
        muscles: [
            "Latissimus dorsi",
            "The trapezius",
            "Levator scapulae",
            "Rhomboids",
        ],
        img: "/exercises/squatting.jpg",
        imgWidth: 150,
        imgHeight: 277,
    },
]

export const categoriesList: categoriesListType[] = [
    { name: "Cardio", value: 320 },
    { name: "Yoga", value: 112 },
    { name: "Stretching", value: 32 },
    { name: "Power", value: 48 },
]

export const muscleCheckboxList: muscleCheckboxListType = {
    Arms: true,
    Legs: true,
    Breast: true,
    Chest: true,
}

export const muscleGroupList: muscleGroupListType[] = [
    { name: "Arms" },
    { name: "Legs" },
    { name: "Breast" },
    { name: "Chest" },
]
