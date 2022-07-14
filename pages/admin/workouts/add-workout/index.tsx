import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import WorkoutForm from "../../../../components/WorkoutForm/workoutForm"

const AddExercise = () => {
    return (
        <div>
            <WorkoutForm title="Add exercise" />
        </div>
    )
}

export default withLayout(AddExercise)
