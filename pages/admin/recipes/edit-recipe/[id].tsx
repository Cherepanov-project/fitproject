import { useQuery } from "react-query"
import { GetServerSideProps } from "next"

import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import { getRecipeById } from "../../../../API/recipes"
import RecipeForm from "../../../../components/RecipeForm/recipeForm"
import { IRecipeEditProps } from "../../../../models/recipes/recipes"

export const getServerSideProps: GetServerSideProps = async props => {
    const id = props.query.id
    return {
        props: { id },
    }
}

const RecipeEdit = ({ id }: IRecipeEditProps) => {
    const { data, isLoading, error } = useQuery(["resipe", id], () => getRecipeById(+id)
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
            <RecipeForm title={id} recipeData={data?.data} />
        </div>
    )
}

export default withLayout(RecipeEdit)
