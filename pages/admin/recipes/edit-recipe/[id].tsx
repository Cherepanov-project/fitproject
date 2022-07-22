import { useQuery } from "react-query"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { getRecipeById } from "@/API/recipes"
import EditFormRecipe from "@/components/EditFormRecipe/editFormRecipe"
import { IRecipeEditProps } from "@/models/recipes/recipes"

// export const getServerSideProps: GetServerSideProps = async props => {
//     const id = props.query.id
//     return {
//         props: { id },
//     }
// }

const RecipeEdit = () => {
    const router = useRouter()
    const { data, isLoading, error } = useQuery(["resipe", router], () => getRecipeById(Number(router.query.id))
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
            <EditFormRecipe title={`Editing recipe № ${router.query.id}`} recipeData={data} />
        </div>
    )
}

export default withLayout(RecipeEdit)
