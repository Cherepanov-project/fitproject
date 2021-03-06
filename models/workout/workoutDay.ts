export interface IWorkoutDayType {
    id: number
    name: string
    repeat: number
    exercises: string
    activeMenu: boolean
}

export interface IItemWorkoutProps {
    workoutEl: IWorkoutDayType
    asPath: string
    menuClickShow?: (id: number) => void
}

export interface IItemWorkoutPropsStyle {
    fontSize?: string
    color?: string
}

export interface IDropMenuPropsStyle {
    $display: boolean
}

const workoutDay: IWorkoutDayType[] = [
    {
        id: 10,
        name: "Отжимание",
        repeat: 10,
        exercises: "Отжимание",
        activeMenu: false,
    },
    {
        id: 2,
        name: "Отжимание",
        repeat: 10,
        exercises: "Отжимание",
        activeMenu: false,
    },
    {
        id: 7,
        name: "Отжимание",
        repeat: 10,
        exercises: "Отжимание",
        activeMenu: false,
    },
    {
        id: 9,
        name: "Отжимание",
        repeat: 10,
        exercises: "Отжимание",
        activeMenu: false,
    },
    {
        id: 8,
        name: "Отжимание",
        repeat: 10,
        exercises: "Отжимание",
        activeMenu: false,
    },
]

export { workoutDay }
