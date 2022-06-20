import { FC } from "react"
import { TableCell, TableHead, TableRow } from "@mui/material"

interface TableHeaderProps {
    listTitle: Array<string>
}

const TableHeader: FC<TableHeaderProps> = ({ listTitle }) => {
    const item = listTitle.map(el => (
        <TableCell
            sx={{
                paddingLeft: 3.5,
                paddingBottom: 1,
                color: "#9FA2B4",
                fontSize: 15,
                width: 250,
            }}
            key={el}
        >
            {el}
        </TableCell>
    ))
    return (
        <TableHead>
            <TableRow>{item}</TableRow>
        </TableHead>
    )
}

export default TableHeader
