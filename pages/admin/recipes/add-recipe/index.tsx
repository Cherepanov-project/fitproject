import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import RecipeForm from "../../../../components/RecipeForm/recipeForm"

const AddRecipe = () => {
    return (
        <div>
            <RecipeForm title="Add recipe" />
        </div>
    )
}

export default withLayout(AddRecipe)
