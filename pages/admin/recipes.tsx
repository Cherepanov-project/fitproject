import React from "react"
import { withLayout } from "../../layouts/Layout-admin/Layout-admin"
import { useState, useEffect } from "react"
import FilterBtn from "../../components/FilterBtn/filter"
import { ContentListType, contentList } from "../../model/recipies/recipiesList"
import Recipe from "../../components/RecipiesContainer/ResipiesList/recipe"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import { ContentList, FooterRecipies } from "./overview/overviewStyles"
import CreateForm from "../../components/RecipiesContainer/AddBtn/addForm"
import Pagination from "../../components/Pagination/pagination"
import ColumnName from "../../components/RecipiesContainer/ColumnName/columnName"
import getArrPagination from "../../utils/getArrPagination"

const Recipes = () => {
    const [arrRecipes, setArrRecipes] = useState<ContentListType[]>([])
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

    useEffect(() => {
        setArrRecipes(contentList)
        setPage(0)
    }, [])

    const recipe = getArrPagination(page, rowsPerPage, arrRecipes).map(el => {
        return (
            <Recipe
                key={el.id}
                id={el.id}
                portionSize={el.uniqueRecipeField.portionSize}
                dishType={el.uniqueRecipeField.type}
                proteins={el.proteins}
                fats={el.fats}
                carbohydrates={el.carbohydrates}
                name={el.name}
                calories={el.calories}
                status={el.status}
            />
        )
    })

    return (
        <ContentList>
            <FilterBtn title="Recipies" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{recipe}</TableBody>
                </Table>
            </TableContainer>
            <FooterRecipies>
                <CreateForm data-testid="new-recipe" />
                <Pagination
                    count={arrRecipes.length}
                    rowsPerPageOptions={[8, 10]}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </FooterRecipies>
        </ContentList>
    )
}

export default withLayout(Recipes)
