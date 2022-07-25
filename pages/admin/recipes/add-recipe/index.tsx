import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import EditFormRecipe from "@/components/EditFormRecipe/editFormRecipe"

const AddRecipe = () => {
    return (
        <div>
            <EditFormRecipe title="Add recipe" btnText="Create" />
        </div>
    )
}

export default withLayout(AddRecipe)
