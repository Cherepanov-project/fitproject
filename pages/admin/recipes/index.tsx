import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import CircularProgress from "@mui/material/CircularProgress"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import FilterMenu from "@/components/FilterMenu/filterMenu"
import TableItemRecipes from "@/components/TableItemRecipes/tableItemRecipes"
import { StyleContentList, StyleFooterRecipes, StyleLoaderContainer } from "@/styles/admin/recipes/recipes.styles"
import CreateForm from "@/components/AddBtn/addForm"
import Pagination from "@/components/Table/tablePagination"
import ColumnName from "@/components/ColumnName/columnName"
import { getRecipesList } from "@/API/recipes"
import getArrPagination from "@/utils/getArrPagination"

const RecipesListPage = () => {
    const [listChange, setListChange] = useState<boolean>(false)
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const { isLoading, error } = useQuery(["recipesList", listChange], getRecipesList, { onSuccess: (data) => {
        setData(data)
        setSortedData(data)
    } })
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [page, rowsPerPage]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    if (error instanceof Error) {
        throw new Error(error.message)
        //return <h1>{error.message}</h1>
    }
    if (isLoading || data.length === 0) {
        return (
            <StyleLoaderContainer>
                <CircularProgress></CircularProgress>
            </StyleLoaderContainer>
        )
    }
    const updateList = () => {
        const isChanged = listChange;
        setListChange(!isChanged);
    }
    const updateData = (newData) => {
        setSortedData([...newData])
    }

    const recipe = getArrPagination(page, rowsPerPage, sortedData).map(el => {
        return (
            <TableRow hover sx={{ cursor: "pointer" }} key={el.id}>
                <TableItemRecipes
                id={el.id}
                picUrl={el.picUrl}
                protein={el.protein}
                fat={el.fat}
                carbohydrate={el.carbohydrate}
                name={el.name}
                calorie={el.calorie}
                status={"HIGH"}
                portionSize={1}
                updateList={updateList}
                el={el}
            /> 
            </TableRow>

        )
    })

    return (
        <StyleContentList>
            <FilterMenu title="Recipes" data={data} sortedD={sortedData} updateData={updateData}/>
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{recipe}</TableBody>
                </Table>
            </TableContainer>
            <StyleFooterRecipes>
                <CreateForm />
                <Pagination
                    count={sortedData.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </StyleFooterRecipes>
        </StyleContentList>
    )
}

export default withLayout(RecipesListPage)
