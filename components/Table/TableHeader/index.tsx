import { FC, ReactElement } from "react"
import Header from "./tableHeader.styles"
import { ITableHeaderProps } from "./tableHeader.interface"

const TableHeader: FC<ITableHeaderProps> = ({ title, children }) => {
    return (
        <Header>
            <p>{title}</p>
            {children}
        </Header>
    )
}

export default TableHeader
