import React, { useState } from "react"
import { useField } from "formik"
import { Box, FormControl, IconButton } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"

import { ErrorMessage, Input } from "../../pages/user/userLoginOrRegisterStyle"
import {
    IFormStatus,
    IInputForm,
} from "../../models/loginOrRegisterInterfaces/interfaces"

const FormTextField = (props: IInputForm) => {
    const [field, meta] = useField(props)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: "",
        type: "",
        showPassword: false,
    })

    const handleClickShowPassword = () => {
        setFormStatus({
            ...formStatus,
            showPassword: !formStatus.showPassword,
        })
    }

    return (
        <Box paddingBottom={1}>
            <FormControl sx={{ width: "100%" }}>
                <Input
                    error={meta.error && meta.touched}
                    type={!props.secrecy ? "text" : "password"}
                    {...field}
                    {...props}
                />
                {props.secrecy ? (
                    <IconButton
                        sx={{ position: "absolute", right: "3%" }}
                        onClick={handleClickShowPassword}
                        edge="end"
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

export { FormTextField }
