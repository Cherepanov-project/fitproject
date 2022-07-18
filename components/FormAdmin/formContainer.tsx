import React from "react"

import { FormAdminWrapper } from "./formContainer.styles"
import { layoutAdminProps } from "@/containers/Layout-admin/layoutAdmin.interface"

const FormContainer: React.FC<layoutAdminProps> = ({ children, ...props }) => {
    return <FormAdminWrapper {...props}>{children}</FormAdminWrapper>
}

export { FormContainer }
