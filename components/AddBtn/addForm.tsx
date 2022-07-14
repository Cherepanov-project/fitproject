import Link from "next/link"
import { useRouter } from "next/router"
import Button from "@mui/material/Button"

const CreateForm = () => {
    let addBtnName = []
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()

    if (path === "recipes") {
        addBtnName = ["/admin/recipes/add-recipe"]
    }

    if (path === "workouts") {
        addBtnName = ["/admin/workouts/add-workout"]
    }

    if (path === "articles") {
        addBtnName = ["/admin/articles/add-article"]
    }

    if (path === "users") {
        addBtnName = ["/admin/users/add-user"]
    }

    const items = addBtnName.map(el => (
        <Link href={{ pathname: el }} key={el} passHref>
            <Button
                variant="contained"
                sx={{
                    height: "40px",
                    fontSize: "12px",
                    verticalAlign: "middle",
                    backgroundColor: "grey",
                    borderRadius: "20px",
                    marginTop: 2.5,
                    marginLeft: 3.5,
                }}
            >
                Add
            </Button>
        </Link>
    ))

    return (
        <>
            {items}
        </>
    )
}

export default CreateForm
