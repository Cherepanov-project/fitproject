import React, { useState } from "react"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { StyleContentList, StyleFooterRecipes } from "@/styles/admin/overview/overview.styles"
import FilterMenu from "@/components/FilterMenu/filterMenu"
import ColumnName from "@/components/ColumnName/columnName"
import { articlesList } from "@/models/admin/articlesList";
import TableBody from "@mui/material/TableBody";
import CreateForm from "@/components/AddBtn/addForm";
import Pagination from "@/components/Table/tablePagination";
import TableRow from "@mui/material/TableRow";
import TableItemArticles from "@/components/TableItemArticles/tableItemArticles";

const Articles = () => {
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(8)
    const [listChange, setListChange] = useState<boolean>(false)
    const [sortedData, setSortedData] = useState([])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    const updateList = () => {
        const isChanged = listChange;
        setListChange(!isChanged);
    }

    const updateData = (newData) => {
        setSortedData([...newData])
    }

    const articles = articlesList.map(article => {
        return (
            <TableRow hover sx={{ cursor: "pointer" }} key={article.id}>
                <TableItemArticles
                    article={article}
                    // portionSize={1}
                    // updateList={updateList}
                />
            </TableRow>
        )
        })
    return (
        <StyleContentList>
            <FilterMenu title="Articles" data={articlesList} updateData={updateData} sortedD={articlesList} />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    <TableBody>{articles}</TableBody>
                </Table>
            </TableContainer>
            <StyleFooterRecipes>
                <CreateForm />
                <Pagination
                    count={articlesList.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </StyleFooterRecipes>
        </StyleContentList>
    )
}

export default withLayout(Articles)
