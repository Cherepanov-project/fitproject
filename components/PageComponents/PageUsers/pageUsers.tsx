import React, { useEffect, useState } from "react"
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

// styles
import { ContentWrapper, Footer } from "./pageUsers.styles"

// components
import TableItemUsers from "../../TableItemUsers/tableItemUsers"
import Pagination from "../../Table/tablePagination"
import ColumnName from "../../ColumnName/columnName"
import TableHeader from "../../Table/TableHeader/tableHeader"

// utils
import getArrPagination from "@/utils/getArrPagination"

// API
import { getUserList, postUser } from "@/API/users"

const defaultFilter = {
    role: ["admin", "user"], // есть админ значит тру иначе удаляю с массива?
    gendor: ["male", "female"],
}

const PageUsers = () => {
    const { error, isLoading, data } = useQuery("getUserList", getUserList)

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const [filter, setFilter] = useState(defaultFilter)

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
            <TableItemUsers
                id={el.id}
                username={el.username}
                firstName={el.firstName}
                lastName={el.lastName}
                email={el.email}
                phone={el.phone}
                age={el.age}
                gender={el.gender}
                coach={el.coach}
                avatar={el.avatar}
            />
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
