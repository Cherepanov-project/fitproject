import { useQuery } from "react-query"
import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import { getRecipeById } from "../../../../services/API/adminApi"
import { GetServerSideProps } from "next"
import RecipeForm from "../../../../components/RecipeForm/recipeForm"

interface IRecipeEditProps {
    id?: string
}

export const getServerSideProps: GetServerSideProps = async props => {
    const id = props.query.id

    return {
        props: { id },
    }
}

const RecipeEdit = ({ id }: IRecipeEditProps) => {
    const { data, isLoading, error } = useQuery(
        ["resipe", id],
        () => {
            return getRecipeById(+id)
        }
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
