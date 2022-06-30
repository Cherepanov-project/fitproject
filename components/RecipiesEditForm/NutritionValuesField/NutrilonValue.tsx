import React from "react"
import { useField } from "formik"
import { TextField, Typography, Box } from "@mui/material"

interface IProps {
    name: string
    formik: string
}

const NutrilonValue = (props: IProps) => {
    const [field, meta, helpers] = useField(props.formik)
    return (
        <Box sx={{ mt: 4 }}>
            <Typography fontSize="16px" color="#6F7482">
                {props.name}
            </Typography>
            <TextField
                {...field}
                {...props}
                fullWidth
                id={field.name}
                name={field.name}
                placeholder={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                variant="outlined"
                sx={{ input: { padding: "10px" }, bgcolor: "#FFF" }}
            />
        </Box>
    )
}

export default NutrilonValue
