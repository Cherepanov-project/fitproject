import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"

import CircularProgress from "@mui/material/CircularProgress"

import { getRecipeById } from "@/API/recipes"
import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import RecipeItem from "@/components/RecipeItem/recipeItem"
import { StyleLoaderContainer, StyleContentList, StyledContainer } from "@/styles/admin/recipes/recipes.styles"

const RecipePage = () => {
    
    const router = useRouter()
    const [dataItem, setDataItem] = useState()
    const { data, isLoading, error, refetch } = useQuery(["recipesById", router.query.id], () => getRecipeById(Number(router.query.id)), {
        enabled: false,
        onSuccess: (data) => {
            setDataItem(data)
        },
      })

      useEffect(() => {
        if (router.isReady && router.query.data !== undefined) {
            setDataItem(JSON.parse(router.query.data as string))
        } else if (router.isReady && !router.query.data) {
            refetch()
        }
      }, [router.isReady]);
    
    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return (
            <StyleLoaderContainer>
                <CircularProgress></CircularProgress>
            </StyleLoaderContainer>
        )
    }

    return (
        <StyledContainer>
            <StyleContentList>
                {dataItem !== undefined ? (
                    <RecipeItem
                        status={"HIGH"}
                        portionSize={1}
                        dataItem={dataItem}
                        ></RecipeItem>
                ) : null}
            </StyleContentList>
        </StyledContainer>
    )
}

export default withLayout(RecipePage)
