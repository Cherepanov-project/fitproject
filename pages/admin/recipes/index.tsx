import React from "react"
import { withLayout } from "../../../containers/Layout-admin/Layout-admin"
import { useState, useEffect } from "react"
import FilterMenu from "../../../components/FilterMenu/filter"
import Recipie from "../../../components/RecipiesTableItem/recipie"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import { ContentList, FooterRecipes } from "../overview/overviewStyles"
import CreateForm from "../../../components/RecipiesTableItem/AddBtn/addForm"
import Pagination from "../../../components/Table/TablePagination"
import ColumnName from "../../../components/User/ColumnName/ColumnName"
import { QueryClient, useQuery, dehydrate } from "react-query"
import { getRecipesList } from "../../../services/API/adminApi"

export const getStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery("posts", getRecipesList)

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

const Recipes = () => {
    const {
        data: ResipesArr,
        isLoading,
        error,
    } = useQuery("recipesList", getRecipesList)

    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    if (error instanceof Error) {
        console.log(error.message)

        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const resipie = ResipesArr.data.map(el => {
        return (
            <Recipie
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
        <ContentList>
            <FilterMenu title="Recipies" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{resipie}</TableBody>
                </Table>
            </TableContainer>
            <FooterRecipes>
                <CreateForm />
                <Pagination
                    count={ResipesArr.data.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </FooterRecipes>
        </ContentList>
    )
}

export default withLayout(Recipes)
