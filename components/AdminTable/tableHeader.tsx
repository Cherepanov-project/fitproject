import React from "react"
import { TableCell, TableHead, TableRow } from "@mui/material"

import { ITableHeaderProps } from "./tableHeader.interface"

const TableHeader: React.FC<ITableHeaderProps> = ({ listTitle }) => {
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
