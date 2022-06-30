import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import { useState, useEffect } from "react"

import { withLayout } from "../../containers/Layout-admin/layoutAdmin"
import { ContentList, FooterRecipes } from "./overview/overviewStyles"
import FilterBtn from "../../components/FilterBtn/filterBtn"
import Recipe from "../../components/RecipiesContainer/ResipiesList/recipe"
import CreateForm from "../../components/RecipiesContainer/AddBtn/addForm"
import Pagination from "../../components/Pagination/pagination"
import ColumnName from "../../components/RecipiesContainer/ColumnName/columnName"
import getArrPagination from "../../utils/getArrPagination"
import {
    IContentListType,
    contentList,
} from "../../models/recipies/recipiesList"

const Recipes = () => {
    const [arrRecipes, setArrRecipes] = useState<IContentListType[]>([])
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
            <FilterBtn title="Recipes" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{recipe}</TableBody>
                </Table>
            </TableContainer>
            <FooterRecipes>
                <CreateForm />
                <Pagination
                    count={arrRecipes.length}
                    rowsPerPageOptions={[8, 10]}
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
