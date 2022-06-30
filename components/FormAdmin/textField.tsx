import React from "react"
import { useField } from "formik"

import { DivInput, StyledLabel, StyledInput, ErrorForm } from "./Form.styled"
import { IFormProps } from "./Form.interface"

const TextField: React.FC<IFormProps> = ({ label, ...props }): JSX.Element => {
    const [field, meta] = useField(props)
    return (
        <DivInput>
            <StyledLabel htmlFor={field.name}>{label}</StyledLabel>
            <StyledInput errorProps={!meta.error} {...field} {...props} />
            <ErrorForm component="div" name={field.name} />
        </DivInput>
    )
}

export default TextField
