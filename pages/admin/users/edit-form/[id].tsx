import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import EditFormUser from "@/components/EditFormUser/EditFormUser"

const AddUser = () => {
    return (
        <div>
            <EditFormUser title="Edit user" button="Edit profile" />
        </div>
    )
}

export default withLayout(AddUser)
