import React from "react"
import { withLayout } from "../../layouts/Layout-admin/Layout-admin"
import { useState, useEffect } from "react"
import FilterBtn from "../../components/FilterBtn/filter"
import { ContentListType, contentList } from "../../model/recipies/recipiesList"
import Recipie from "../../components/RecipiesContainer/ResipiesList/recipie"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import { ContentList, FooterRecipies } from "./overview/overviewStyles"
import CreateForm from "../../components/RecipiesContainer/AddBtn/addForm"
import Pagination from "../../components/Pagination/pagination"
import ColumnName from "../../components/AdminTable/ColumnName/columnName"
import getArrPagination from "../../utils/getArrPagination"

const Recipes = () => {
    const [arrRecipies, setArrRecipies] = useState<ContentListType[]>([])
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
        setArrRecipies(contentList)
        setPage(0)
    }, [])

    const resipie = getArrPagination(page, rowsPerPage, arrRecipies).map(el => {
        return (
            <Recipie
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
                    <TableBody>{resipie}</TableBody>
                </Table>
            </TableContainer>
            <FooterRecipies>
                <CreateForm />
                <Pagination
                    count={arrRecipies.length}
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
