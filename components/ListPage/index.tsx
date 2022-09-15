import React, { FC, useMemo, useState } from "react";
import getArrPagination from "@/utils/getArrPagination";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import ColumnName from "@/components/ColumnName/columnName";
import TableBody from "@mui/material/TableBody";
import CreateForm from "@/components/AddBtn/addForm";
import Pagination from "@/components/Table/tablePagination";
import { IProps } from "@/components/ListPage/listPage.interface";
import { StyleFooterRecipes } from "./listPage.styles";
import processingData from "@/utils/processingData";

export const ListPage: FC<IProps> = ({Component, data, processData, updateList}) => {
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)

    const memoData = useMemo(() => {
        return processingData(data, processData)
    }, [processData])

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const renderData = getArrPagination(page, rowsPerPage, !memoData ? data : memoData).map(el => {
        return (
            <Component
                key={el.id}
                element={el}
                updateList={updateList}
                item={el}
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

