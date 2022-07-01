import { useState, FC, useCallback } from "react"
import { useField } from "formik"

import { DivInput, StyledLabel, StyledInput, ErrorForm } from "./form.styles"
import { IFormProps } from "./form.interface"
import calcPasswordVisibility from "../../utils/calcPasswordVisibility"
import { IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
const TextField: FC<IFormProps> = ({ label, type, ...props }): JSX.Element => {
    const [field, meta] = useField(props)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [passwordType, setPasswordType] = useState<string>(
        calcPasswordVisibility(type, showPassword)
    )
    const changeVisibility = useCallback(() => {
        setShowPassword(show => !show)
        setPasswordType(calcPasswordVisibility(type, !showPassword))
    }, [showPassword, type])

    return (
        <DivInput>
            <StyledLabel htmlFor={field.name}>{label}</StyledLabel>
            <StyledInput
                errorProps={!meta.error}
                type={passwordType}
                {...field}
                {...props}
            />
            {type === "password" ? (
                <IconButton
                    onClick={changeVisibility}
                    edge="end"
                    data-testid="show-password"
                >
                    {showPassword ? (
                        <VisibilityOff sx={{ color: "#A7A3FF" }} />
                    ) : (
                        <Visibility sx={{ color: "#A7A3FF" }} />
                    )}
                </IconButton>
            ) : null}
            <ErrorForm component="div" name={field.name} />
        </DivInput>
    )
}

export default TextField
