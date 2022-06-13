import React, { useEffect, useState } from "react"
import { withLayout } from "../../../layouts/Layout-admin/Layout-admin"
import { ContentWrapper } from "./stylesUsers"
import FilterBtn from "../../../components/FilterBtn/filter"
import { TableContainer, Table, TableBody } from "@mui/material"
import UserItem from "../../../components/AdminTable/UserItem"
import { userList } from "../../../model/userList/userList"
import Pagination from "../../../components/Pagination/pagination"
import getArrPagination from "../../../utils/getArrPagination"
import ColumnName from "../../../components/RecipiesContainer/ColumnName/columnName"

interface DataType {
    id: string
    nameUser: string
    sex: string
    avatar?: string
    dateRegistor: string
    role: string
    email: string
}

const Users = () => {
    const [userData, setUserDate] = useState<DataType[]>([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(8)

    useEffect(() => {
        setUserDate(userList)
        setPage(0)
    }, [])

    const onChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const onChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const userItemList = getArrPagination(page, rowsPerPage, userData).map(
        el => {
            return (
                <UserItem
                    nameUser={el.nameUser}
                    key={el.id}
                    dateRegistor={el.dateRegistor}
                    role={el.role}
                    email={el.email}
                    sex={el.sex}
                />
            )
        }
    )
    return (
        <ContentWrapper>
            <FilterBtn title="User" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{userItemList}</TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={userData.length}
                rowsPerPageOptions={[8, 10]}
                page={page}
                onChangePage={onChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={onChangeRowsPerPage}
            />
        </ContentWrapper>
    )
}

export default withLayout(Users)
