import React, { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import FilterMenu from "@/components/FilterMenu/filterMenu"
import Recipe from "@/components/RecipesTableItem/recipe"
import { StyleContentList, StyleFooterRecipes } from "@/styles/admin/overview/overview.styles"
import CreateForm from "@/components/RecipesTableItem/AddBtn/addForm"
import Pagination from "@/components/Table/tablePagination"
import ColumnName from "@/components/User/ColumnName/columnName"
import { useQuery } from "react-query"
import { getRecipesList } from "@/API/recipes"

// export const getStaticProps = async () => {
//     await queryClient.prefetchQuery(["recipesList"], async () => {
//         const { data: res } = await getRecipesList()
//         return res
//     })
//
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         },
//     }
// }

const Recipes = () => {
    const { data, isLoading, error } = useQuery("recipesList", getRecipesList)
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

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

    const recipe = data.map(el => {
        return (
            <Recipe
                key={el.id}
                id={el.id}
                protein={el.protein}
                fat={el.fat}
                carbohydrate={el.carbohydrate}
                name={el.name}
                calorie={el.calorie}
                status={"HIGH"}
                portionSize={1}
            />
        )
    })

    return (
        <StyleContentList>
            <FilterMenu title="Recipes" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{recipe}</TableBody>
                </Table>
            </TableContainer>
            <StyleFooterRecipes>
                <CreateForm />
                <Pagination
                    count={data.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </StyleFooterRecipes>
        </StyleContentList>
    )
}

export default withLayout(Recipes)
