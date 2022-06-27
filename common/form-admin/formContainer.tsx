import React, { FC } from "react"
import { FormAdminWrapper } from "./Form.styled"
import { layoutAdminProps } from "../../layouts/Layout-admin/layoutAdmin.interface"

export const FormContainer: FC<layoutAdminProps> = ({ children, ...props }) => {
    return <FormAdminWrapper {...props}>{children}</FormAdminWrapper>
}
