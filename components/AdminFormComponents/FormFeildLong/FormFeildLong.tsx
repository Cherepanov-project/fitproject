import { TextField, TextFieldProps } from "@mui/material"
import { FC } from "react"
import { useField } from "formik"

const FormFeildLong: FC<TextFieldProps> = ({ name, placeholder }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <TextField
            name={name}
            placeholder={placeholder}
            fullWidth
            variant="outlined"
            sx={{
                backgroundColor: "#F8FAFC",
            }}
            value={field.value}
            onChange={field.onChange}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
        />
    )
}

export default FormFeildLong
