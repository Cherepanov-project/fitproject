import React, { useEffect, useState } from "react"
import { withLayout } from "../../../layouts/Layout-admin/Layout-admin"
import { ContentWrapper, Footer } from "./stylesUsers"
import FilterMenu from "../../../common/FilterMenu/filter"
import { TableContainer, Table, TableBody, Button } from "@mui/material"
import UserItem from "../../../components/UserTableItem/UserItem"
import { userList, DataType } from "../../../model/userList/userList"
import Pagination from "../../../common/Table/TablePagination"
import getArrPagination from "../../../utils/getArrPagination"
import ColumnName from "../../../common/user/ColumnName/ColumnName"

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
                    gender={el.gender}
                    id={el.id}
                />
            )
        }
    )
    return (
        <ContentWrapper>
            <FilterMenu title="All users" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{userItemList}</TableBody>
                </Table>
            </TableContainer>
            <Footer>
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
                <Pagination
                    count={userData.length}
                    rowsPerPageOptions={[8, 10]}
                    page={page}
                    onChangePage={onChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </Footer>
        </ContentWrapper>
    )
}

export default withLayout(Users)
