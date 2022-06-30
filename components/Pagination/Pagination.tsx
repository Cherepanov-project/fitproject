import TablePagination from "@mui/material/TablePagination"

const Pagination = ({
    count,
    page,
    onChangePage,
    rowsPerPage,
    onChangeRowsPerPage,
    rowsPerPageOptions,
}) => {
    return (
        <>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={count}
                page={page}
                onPageChange={onChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={onChangeRowsPerPage}
                sx={{
                    height: 65,
                    width: 400,
                    borderBottom: "1px solid #DFE0EB",
                    marginRight: 7,
                    marginLeft: "auto",
                    marginTop: 0,
                }}
            />
        </>
    )
}

export default Pagination
