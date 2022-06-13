import { useField } from "formik"
import { TextField } from "@mui/material"

interface IProps {
    name: string
}

const HeaderInput: React.FC<IProps> = (props: IProps) => {
    const [field, meta, helpers] = useField(props.name)
    return (
        <TextField
            {...field}
            {...props}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            placeholder={field.name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            sx={{ input: { padding: "10px" }, backgroundColor: "#F8FAFC" }}
        />
    )
}

export default HeaderInput
