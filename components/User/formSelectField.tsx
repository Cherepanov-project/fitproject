import React, { useState } from "react"
import { useField } from "formik"
import { nanoid } from "nanoid"
import { Box, FormControl } from "@mui/material"

import { ISelectForm } from "../../models/loginOrRegisterInterfaces/interfaces"
import { ErrorMessage, InputSelect, SelectOption } from "../RegOrLoginSocial/regOrLoginSocial.styles"

export const FormSelectField = (props: ISelectForm) => {
    const [field, meta] = useField(props)

    return (
        <Box paddingBottom={1}>
            <FormControl sx={{ width: "100%" }}>
                <InputSelect
                    defaultValue=""
                    error={meta.error && meta.touched}
                    {...field}
                    {...props}
                >
                    <SelectOption value="" selected>
                        {props.placeholder}
                    </SelectOption>
                    {props.values.map(elem => {
                        return (
                            <SelectOption key={nanoid()} value={elem.value}>
                                {elem.title}
                            </SelectOption>
                        )
                    })}
                </InputSelect>
            </FormControl>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Box>
    )
}
