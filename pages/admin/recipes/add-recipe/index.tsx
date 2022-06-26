import { withLayout } from "../../../../layouts/Layout-admin/Layout-admin"
import RecipeForm from "../../../../common/recipeForm/RecipeForm"

const AddRecipe = () => {
    return (
        <div>
            <RecipeForm title="Add recipe" />
        </div>
    )
}

export default withLayout(AddRecipe)
