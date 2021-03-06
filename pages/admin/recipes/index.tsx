import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import FilterMenu from "@/components/FilterMenu/filterMenu"
import TableItemRecipes from "@/components/TableItemRecipes/tableItemRecipes"
import { StyleContentList, StyleFooterRecipes } from "@/styles/admin/overview/overview.styles"
import CreateForm from "@/components/AddBtn/addForm"
import Pagination from "@/components/Table/tablePagination"
import ColumnName from "@/components/ColumnName/columnName"
import { getRecipesList } from "@/API/recipes"

const RecipesListPage = () => {
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)
    const [listChange, setListChange] = useState<boolean>(false)
    const { data, isLoading, error } = useQuery(["recipesList", page, rowsPerPage, listChange], () => getRecipesList(page, rowsPerPage), {
        keepPreviousData: true
      })
    
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
        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    const updateList = () => {
        const isChanged = listChange;
        setListChange(!isChanged);
    }

    const recipe = data.content.map(el => {
        return (
            <TableItemRecipes
                key={el.id}
                id={el.id}
                protein={el.protein}
                fat={el.fat}
                carbohydrate={el.carbohydrate}
                name={el.name}
                calorie={el.calorie}
                status={"HIGH"}
                portionSize={1}
                updateList={updateList}
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
                    count={data.totalElements}
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
