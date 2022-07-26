import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import EditFormUser from "@/components/EditFormUser/EditFormUser"

const AddUser = () => {
    return (
        <div>
            <EditFormUser title="Add user" button="Add user" />
        </div>
    )
}

export default withLayout(AddUser)
