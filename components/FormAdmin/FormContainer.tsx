import React from "react"

import { FormAdminWrapper } from "./Form.styled"
import { layoutAdminProps } from "../../containers/Layout-admin/LayoutAdmin.interface"

const FormContainer: React.FC<layoutAdminProps> = ({ children, ...props }) => {
    return <FormAdminWrapper {...props}>{children}</FormAdminWrapper>
}

export { FormContainer }
