export interface IWorkoutFormProps {
    title: string
    workoutData?: { id: string; description: string }
}

interface IWorkout {
    id?: number
    name: string
    repeatCount: number
    approachCount: number
    area: string
    category: string
}

export interface IWorkoutArr {
    data: {
        content: IWorkout[]
    }


}
