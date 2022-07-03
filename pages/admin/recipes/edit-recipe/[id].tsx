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
