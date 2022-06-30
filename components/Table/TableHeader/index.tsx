import { FC, ReactElement } from "react"
import Header from "./TableHeader.style"

interface TableHeaderProps {
    title: string
    children?: ReactElement
}
const TableHeader: FC<TableHeaderProps> = ({ title, children }) => {
    return (
        <Header>
            <p>{title}</p>
            {children}
        </Header>
    )
}

export default TableHeader
