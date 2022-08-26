import React, {useEffect, useMemo, useState} from "react"
import { useQuery } from "react-query"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import CircularProgress from "@mui/material/CircularProgress"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import TableItemRecipes from "@/components/TableItemRecipes/tableItemRecipes"
import { StyleContentList, StyleFooterRecipes, StyleLoaderContainer } from "@/styles/admin/recipes/recipes.styles"
import CreateForm from "@/components/AddBtn/addForm"
import Pagination from "@/components/Table/tablePagination"
import ColumnName from "@/components/ColumnName/columnName"
import {getRecipesList} from "@/API/recipes"
import getArrPagination from "@/utils/getArrPagination"
import Filter from "@/components/Filter";
import Sort from "@/components/Sort";
import { Title } from "@/components/FilterMenu/filterMenu.styles";
import { StyleHeader, StyleBlockButtons } from "@/styles/admin/articles/articles.styles"
import {SortType} from "@/components/Sort/sort.interfaces";
import {sorting} from "@/utils/sorting";
import {TData} from "memfs/lib/volume";

const RecipesListPage = () => {
    const [listChange, setListChange] = useState<boolean>(false)
    const [data, setData] = useState([])
    const [sort, setSort] = useState(false)
    const [value, setValue] = useState('')
    const [type, setType] = useState('');

    const {isLoading, error} = useQuery(["recipesList", listChange], getRecipesList, {
        onSuccess: (data) => {
            setData(data)
        }
    })
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, rowsPerPage]);

    const startSort = (value: string, type: SortType) => {
        setSort(true)
        setValue(value)
        setType(type)
    }

    const stopSort = () => { setSort(false) }

    const memoSorting: TData[] = useMemo(() => {
       return sorting(data, value.toLowerCase(), type)
    }, [sort, value, type])

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

    const recipe = getArrPagination(page, rowsPerPage, sort ? memoSorting : data).map(el => {
        return (
            <TableRow hover sx={{cursor: "pointer"}} key={el.id}>
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
            <StyleHeader>
                <Title>Recipes</Title>
                <StyleBlockButtons>
                    <Sort data={data} sortedData={data} startSort={startSort} stopSort={stopSort}/>
                    <Filter data={data} sortedD={data} />
                </StyleBlockButtons>
            </StyleHeader>
            <TableContainer>
                <Table sx={{minWidth: 1120}}>
                    <ColumnName/>
                    <TableBody>{recipe}</TableBody>
                </Table>
            </TableContainer>
            <StyleFooterRecipes>
                <CreateForm/>
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

export default withLayout(RecipesListPage)
