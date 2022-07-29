import React, { useState } from "react"
import { useQuery } from "react-query"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { getWorkoutList } from "@/API/workouts"
import TableItemWorkouts from "@/components/TableItemWorkouts/tableItemWorkouts"
import { StyleContentList, StyleFooterRecipes } from "@/styles/admin/overview/overview.styles"
import FilterMenu from "@/components/FilterMenu/filterMenu"
import ColumnName from "@/components/ColumnName/columnName"
import CreateForm from "@/components/AddBtn/addForm"
import Pagination from "@/components/Table/tablePagination"

const WorkoutsListPage = () => {
    const [ page, setPage ] = useState<number>(0)
    const [ rowsPerPage, setRowsPerPage ] = useState<number>(8)
    const [listChange, setListChange] = useState<boolean>(false)
    const { data, isLoading, error } = useQuery(["workoutsList", page, rowsPerPage, listChange], getWorkoutList)

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
    const workouts = data.map(el => {
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
            />
        )
    })
    const updateData = (newData) => {
        console.log('')
    }

    return (
        <StyleContentList>
            <FilterMenu title="Workouts" data={data} sortedD={data} updateData={updateData}/>
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{workouts}</TableBody>
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

export default withLayout(WorkoutsListPage)
