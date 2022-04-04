import TablePagination from '@mui/material/TablePagination';

const Pogination = ({arrRecipies, page, handleChangePage, rowsPerPage, handleChangeRowsPerPage}) => {
    
    return (
        <>
            <TablePagination
                rowsPerPageOptions={[8,10]}
                component="div"
                count={arrRecipies.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx ={{ height: 65, width: 400, borderBottom: '1px solid #DFE0EB', 
                    marginRight: 7, marginLeft: 'auto', marginTop: -6}}
            />
        </>
    )
}

export default Pogination;