import React, { useState } from "react"
import { useQuery } from "react-query"
import Link from "next/link"

// ui libs
import {
    TableContainer,
    Table,
    TableBody,
    Button,
    TableRow,
} from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

// styles
import { ContentWrapper, Footer, StylesLoader } from "./pageUsers.styles"

// components
import TableItemUsers from "../../TableItemUsers/tableItemUsers"
import Pagination from "../../Table/tablePagination"
import ColumnName from "../../ColumnName/columnName"
import TableHeader from "../../Table/TableHeader/tableHeader"

// utils
import getArrPagination from "@/utils/getArrPagination"

// API
import { getUserList } from "@/API/users"

const PageUsers = () => {
    const { error, isLoading, data } = useQuery("getUserList", getUserList)

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }

    if (isLoading) {
        return (
            <StylesLoader>
                <CircularProgress color="inherit" />
            </StylesLoader>
        )
    }

    const onChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const onChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const userItemList = getArrPagination(page, rowsPerPage, data).map(el => (
        <TableRow hover sx={{ cursor: "pointer" }} key={el.id}>
            <TableItemUsers {...el} />
        </TableRow>
    ))
    return (
        <ContentWrapper>
            <TableHeader title="All user"></TableHeader>
            {/* <FilterAdmin /> */}
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />

                    <TableBody>
                        {userItemList.length ? userItemList : "Users not found"}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer>
                <Link href={`/admin/users/add-form`} passHref>
                    <Button
                        variant="contained"
                        sx={{
                            height: "40px",
                            fontSize: "12px",
                            backgroundColor: "grey",
                            borderRadius: "20px",
                            marginLeft: "20px",
                        }}
                    >
                        Add User
                    </Button>
                </Link>
                <Pagination
                    count={data.length}
                    page={page}
                    onChangePage={onChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </Footer>
        </ContentWrapper>
    )
}

export default PageUsers
