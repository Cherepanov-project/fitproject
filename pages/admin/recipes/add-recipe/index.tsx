import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import EditFormRecipe from "@/components/EditFormRecipe/editFormRecipe"

const AddRecipe = () => {
    return (
        <div>
            <EditFormRecipe title="Add recipe" />
        </div>
    )
}

export default withLayout(AddRecipe)
