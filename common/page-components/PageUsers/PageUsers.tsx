import React, { useEffect, useState, FC } from "react"
import { ContentWrapper, Footer } from "./PageUsers.style"
import {
    TableContainer,
    Table,
    TableBody,
    Button,
    TableRow,
} from "@mui/material"
import UserItem from "../../../components/UserTableItem/UserItem"
import { DataType } from "../../../model/userList/userList"
import Pagination from "../../../common/Table/TablePagination"
import getArrPagination from "../../../utils/getArrPagination"
import ColumnName from "../../../common/user/ColumnName/ColumnName"
import TableHeader from "../../Table/TableHeader"

const defaultFilter = {
    role: ["admin", "user"], // есть админ значит тру иначе удаляю с массива?
    gendor: ["male", "female"],
}
interface PageUsersProps {
    data: Array<DataType>
}

const PageUsers: FC<PageUsersProps> = ({ data }) => {
    const [userData, setUserDate] = useState<DataType[]>([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(8)

    const [filter, setfFlter] = useState(defaultFilter)

    useEffect(() => {
        setUserDate(data)
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
        el => (
            <TableRow hover sx={{ cursor: "pointer" }} key={el.id}>
                <UserItem
                    nameUser={el.nameUser}
                    dateRegistor={el.dateRegistor}
                    role={el.role}
                    email={el.email}
                    gender={el.gender}
                    id={el.id}
                />
            </TableRow>
        )
    )
    return (
        <ContentWrapper>
            <TableHeader title="All user"></TableHeader>
            {/* <FilterAdmin /> */}
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
