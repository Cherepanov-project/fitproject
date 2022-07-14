import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import EditFormWorkout from "../../../../components/EditFormWorkout/editFormWorkout"

const AddWorkout = () => {
    return (
        <div>
            <EditFormWorkout title="Add workout" />
        </div>
    )
}

export default withLayout(AddWorkout)
