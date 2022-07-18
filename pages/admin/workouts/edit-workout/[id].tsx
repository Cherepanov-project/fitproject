import { useQuery } from "react-query"
import { GetServerSideProps } from "next"

import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import { getWorkoutById } from "../../../../API/workouts"
import EditFormWorkout from "../../../../components/EditFormWorkout/editFormWorkout"
import { IWorkoutEditProps } from "../../../../models/workout/workout"

export const getServerSideProps: GetServerSideProps = async props => {
    const id = props.query.id
    return {
        props: { id },
    }
}

const WorkoutEdit = ({ id }: IWorkoutEditProps) => {
    const { data, isLoading, error } = useQuery(["workout", id], () => getWorkoutById(+id)
        // {
        //     initialData: () => {
        //         console.log(queryClient.getQueriesData("recipesList"))
        //     },
        // }"recipesList"
    )
    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <EditFormWorkout title={id} workoutData={data?.data} />
        </div>
    )
}

export default withLayout(WorkoutEdit)
