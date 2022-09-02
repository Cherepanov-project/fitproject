import React, { useState } from "react";
import getArrPagination from "@/utils/getArrPagination";
import TableItemWorkouts from "@/components/TableItemWorkouts/tableItemWorkouts";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import ColumnName from "@/components/ColumnName/columnName";
import TableBody from "@mui/material/TableBody";
import { StyleFooterRecipes } from "@/styles/admin/recipes/recipes.styles";
import CreateForm from "@/components/AddBtn/addForm";
import Pagination from "@/components/Table/tablePagination";

const PaginationWrapper = ({ data }) => {
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const renderData = getArrPagination(page, rowsPerPage, data).map(el => {
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
                // updateList={updateList}
                el={el}
            />
        )
    })

    return (
        <>
            <TableContainer>
                <Table sx={{minWidth: 1120}}>
                    <ColumnName/>
                    <TableBody>{renderData}</TableBody>
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
        </>
    )
}

export default PaginationWrapper