import React, { useState } from "react"
import { useQuery } from "react-query"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import CircularProgress from "@mui/material/CircularProgress"
import { StyleLoaderContainer } from "@/styles/admin/recipes/recipes.styles"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { getWorkoutList } from "@/API/workouts"
import TableItemWorkouts from "@/components/TableItemWorkouts/tableItemWorkouts"
import { StyleContentList, StyleFooterRecipes } from "@/styles/admin/overview/overview.styles"
import FilterMenu from "@/components/FilterMenu/filterMenu"
import ColumnName from "@/components/ColumnName/columnName"
import CreateForm from "@/components/AddBtn/addForm"
import Pagination from "@/components/Table/tablePagination"
import getArrPagination from "@/utils/getArrPagination"
import {Title} from "@/components/FilterMenu/filterMenu.styles";
import {StyleBlockButtons, StyleHeader} from "@/styles/admin/articles/articles.styles";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";

const WorkoutsListPage = () => {
    const [listChange, setListChange] = useState<boolean>(false)
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const { isLoading, error } = useQuery(["workoutsList", listChange], getWorkoutList, { onSuccess: (data) => {
        setData(data)
        setSortedData(data)
    } })
    const [ page, setPage ] = useState<number>(0)
    const [ rowsPerPage, setRowsPerPage ] = useState<number>(8)

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
    const workouts = getArrPagination(page, rowsPerPage, sortedData).map(el => {
        return (
            <TableItemWorkouts
                key={el.id}
                id={el.id}
                name={el.name}
                repeatCount={el.repeatCount}
                approachCount={el.approachCount}
                area={el.area}
                category={el.category}
                status={"HIGH"}
                updateList={updateList}
                el={el}
            />
        )
    })


    return (
        <StyleContentList>
            <StyleHeader>
                <Title>Recipes</Title>
                <StyleBlockButtons>
                    <Sort/>
                    <Filter data={data} sortedD={sortedData} updateData={updateData}/>
                </StyleBlockButtons>
            </StyleHeader>
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{workouts}</TableBody>
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

export default withLayout(WorkoutsListPage)
