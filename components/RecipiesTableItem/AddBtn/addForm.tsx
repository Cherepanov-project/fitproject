import Button from "@mui/material/Button"
import Link from "next/link"

const CreateForm = () => {
    return (
        <>
            <Link
                href={{ pathname: "/admin/[id]", query: { id: "new-recipie" } }}
            >
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
                    Add recipie
                </Button>
            </Link>
        </>
    )
}

export default CreateForm
