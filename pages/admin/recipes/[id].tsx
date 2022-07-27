import { useRouter } from "next/router"
import { useQuery } from "react-query"

import CircularProgress from "@mui/material/CircularProgress"

import { StyleContentList } from "@/styles/admin/overview/overview.styles"
import { getRecipeById } from "@/API/recipes"
import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import RecipeItem from "@/components/RecipeItem/recipeItem"
import { StyleLoaderContainer } from "@/styles/admin/recipes/recipes.styles"

const recipePage = () => {
    const router = useRouter()
    const { data, isLoading, error } = useQuery(["recipesById", router], () => getRecipeById(Number(router.query.id)))
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
    <StyleContentList>
        <RecipeItem 
        name={data.name}
        description={data.description}
        picUrl={data.picUrl}
        calories={data.calorie}
        carbohydrates={data.carbohydrate}
        fat={data.fat}
        protein={data.protein}
        products={data.products}
        status={"HIGH"}
        portionSize={1}
        ></RecipeItem>

    </StyleContentList>
    )
}

export default withLayout(recipePage)
