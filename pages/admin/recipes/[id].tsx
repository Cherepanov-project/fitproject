import { useRouter } from "next/router"
import { useQuery } from "react-query"
import Link from "next/link"
import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { StyleContentList } from "@/styles/admin/overview/overview.styles"
import { getRecipeById } from "@/API/recipes"
import { withLayout } from "@/containers/Layout-admin/layoutAdmin"

const recipeItem = () => {
    const router = useRouter()
    const { data, isLoading, error } = useQuery("recipesById", () => getRecipeById(Number(router.query.id)))
    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } 
    const products = data?.products.map(el => {
            return (
                <h1>{el}</h1>
            )
    })
    
    return (
    <StyleContentList>
        <h1>Dish name: {data.name}</h1>
        <p>Dish description: {data.description}</p>
        <p>PIC URL: {data.picUrl}</p>
        <p>nutritional info</p>
        <p>calories: {data.calorie}</p>
        <p>carbohydrates: {data.carbohydrate}</p>
        <p>fat: {data.fat}</p>
        <p>protein: {data.protein}</p>
        {products}
        <Link href={`/admin/recipes`} passHref>
            <Button variant="outlined" startIcon={<ArrowBackIcon />}>
              Back to recipes list
            </Button>
        </Link>

    </StyleContentList>
    )
}

export default withLayout(recipeItem)
