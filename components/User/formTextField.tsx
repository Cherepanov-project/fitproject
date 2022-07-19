import React, { useState } from "react"
import { useField } from "formik"
import { Box, FormControl, IconButton } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"

import { ErrorMessage, Input } from "../RegOrLoginSocial/regOrLoginSocial.styles"
import calcPasswordVisibility from "@/utils/calcPasswordVisibility"
import { IFormStatus, IInputForm } from "@/models/loginOrRegisterInterfaces/interfaces"

export const FormTextField = (props: IInputForm) => {
    const [field, meta] = useField(props)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: "",
        showPassword: false,
        type: props.type,
    })

    const handleClickShowPassword = () => {
        setFormStatus({
            ...formStatus,
            showPassword: !formStatus.showPassword,
            type: calcPasswordVisibility(props.type, !formStatus.showPassword),
        })
    }

    return (
        <Box paddingBottom={1}>
            <FormControl sx={{ width: "100%" }}>
                <Input
                    error={meta.error && meta.touched}
                    placeholder={props.placeholder}
                    type={formStatus.type}
                    {...field}
                />
                {props.type === "password" ? (
                    <IconButton
                        sx={{ position: "absolute", right: "3%" }}
                        onClick={handleClickShowPassword}
                        edge="end"
                        data-testid="show-password"
                    >
                        {formStatus.showPassword ? (
                            <VisibilityOff sx={{ color: "#A7A3FF" }} />
                        ) : (
                            <Visibility sx={{ color: "#A7A3FF" }} />
                        )}
                    </IconButton>
                ) : null}
            </FormControl>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Box>
    )
}
