import TablePagination from "@mui/material/TablePagination"

const Pogination = ({
    count,
    page,
    onChangePage,
    rowsPerPage,
    onChangeRowsPerPage,
}) => {
    return (
        <>
            <TablePagination
                rowsPerPageOptions={[8, 10]}
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

export default Pogination
