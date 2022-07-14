import React from "react"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"

import { withLayout } from "../../containers/Layout-admin/layoutAdmin"
import { StyleContentList, StyleFooterRecipes } from "./overview/overview.styles"
import FilterMenu from "../../components/FilterMenu/filterMenu"
import ColumnName from "../../components/ColumnName/columnName"

const Articles = () => {
    return (
        <StyleContentList>
            <FilterMenu title="Articles" />
            <TableContainer>
                <Table sx={{ minWidth: 1120 }}>
                    <ColumnName />
                    {/*<TableBody>{articles}</TableBody>*/}
                </Table>
            </TableContainer>
            <StyleFooterRecipes>
                {/*<CreateForm />*/}
                {/*<Pagination*/}
                {/*    count={data.length}*/}
                {/*    page={page}*/}
                {/*    onChangePage={handleChangePage}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    onChangeRowsPerPage={handleChangeRowsPerPage}*/}
                {/*/>*/}
            </StyleFooterRecipes>
        </StyleContentList>
    )
}

export default withLayout(Articles)
