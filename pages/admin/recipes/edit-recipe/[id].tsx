import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { withLayout } from "../../../../containers/Layout-admin/Layout-admin"
import { queryClient } from "../../../_app"
import { getRecipeById } from "../../../../services/API/adminApi"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import RecipeForm from "../../../../components/RecipeForm/RecipeForm"
import { FC, useLayoutEffect, useState } from "react"
import { withRouter } from "next/router"

interface IRecipeEditProps {
    id: string
}

export const getServerSideProps: GetServerSideProps = async props => {
    const id = props.query.id

    return {
        props: { id },
    }
}

const RecipeEdit: FC<IRecipeEditProps> = ({ id }) => {
    // const { query, asPath, isReady } = useRouter()
    // console.log(query)
    console.log(id)

    useQuery(
        ["resipe", id],
        () => {
            return getRecipeById(+id)
        }
        // {
        //     initialData: () => {
        //         console.log(queryClient.getQueriesData("recipesList"))
        //     },
        // }
    )

    return (
        <div>
            <RecipeForm title={id} />
        </div>
    )
}

export default withLayout(RecipeEdit)
