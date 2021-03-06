import { useRouter } from "next/router"
import { useQuery } from "react-query"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { getWorkoutById } from "@/API/workouts"
import { StyleContentList } from "@/styles/admin/overview/overview.styles"
import WorkoutItem from "@/components/WorkoutItem/workoutItem"

const WorkoutPage = () => {
    const router = useRouter()
    const { data, isLoading, error } = useQuery(["workoutById", router], () => getWorkoutById(Number(router.query.id)))
    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <StyleContentList>
            <WorkoutItem
            name={data.name}
            area={data.area}
            category={data.category}
            muscleGroups={data.muscleGroups}
            repeatCount={data.repeatCount}
            approachCount={data.approachCount}
            status={"HIGH"}
            ></WorkoutItem>
        </StyleContentList>
    )
}

export default withLayout(WorkoutPage)
