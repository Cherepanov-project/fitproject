import { withLayout } from "../../../../containers/Layout-admin/Layout-admin"
import RecipeForm from "../../../../components/RecipeForm/RecipeForm"

const AddRecipe = () => {
    return (
        <div>
            <RecipeForm title="Add recipe" />
        </div>
    )
}

export default withLayout(AddRecipe)
