import Link from "next/link"
import Button from "@mui/material/Button"
import {ADD_FORM_BUTTON} from "@/constants/recipes";

const CreateForm = () => {
    return (
        <>
            <Link href={{ pathname: "/admin/recipes/add-recipe" }} passHref>
                <Button
                    variant="contained"
                    sx={ADD_FORM_BUTTON}                >
                    Add recipe
                </Button>
            </Link>
        </>
    )
}

export default CreateForm
