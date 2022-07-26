import { useRouter } from "next/router"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const ColumnName = () => {
    let columnName = []
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()

    if (path === "recipes") {
        columnName = [
            "Dish info",
            "Dish name",
            "Calories (100 grams)",
            "Meal Type",
        ]
    }

    if (path === "workouts") {
        columnName = [
            "Workout info",
            "Name",
            "Category",
            "Type",
        ]
    }

    if (path === "articles") {
        console.log("articles")
    }

    if (path === "users") {
        columnName = [
            "User details",
            "Customer name",
            "Date of Registration",
            "Role",
        ]
    }

    const item = columnName.map(el => (
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

export default ColumnName
