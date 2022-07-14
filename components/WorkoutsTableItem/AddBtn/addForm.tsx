import Link from "next/link"
import Button from "@mui/material/Button"

const CreateForm = () => {
    return (
        <>
            <Link href={{ pathname: "/admin/workout/add-workout" }} passHref>
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
                    Add workout
                </Button>
            </Link>
        </>
    )
}

export default CreateForm
