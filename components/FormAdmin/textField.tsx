import React, { useState, useCallback } from "react"
import { useField } from "formik"
import { IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

import { DivInput, StyledLabel, StyledInput, ErrorForm } from "./formContainer.styles"
import { IFormProps } from "./formContainer.interface"
import calcPasswordVisibility from "../../utils/calcPasswordVisibility"

const TextField: React.FC<IFormProps> = ({ label, type, ...props }): JSX.Element => {
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
        <>
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
                        sx={{ position: "absolute", right: "3%", top: "35%" }}
                    >
                        {showPassword ? (
                            <VisibilityOff sx={{ color: "#9FA2B4" }} />
                        ) : (
                            <Visibility sx={{ color: "#9FA2B4" }} />
                        )}
                    </IconButton>
                ) : null}
            </DivInput>
            <ErrorForm component="div" name={field.name} />
        </>
    )
}

export default TextField
