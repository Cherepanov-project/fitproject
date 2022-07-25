import React from "react"

// styles
import { Normalize } from "styled-normalize"

// container
import { withLayout } from "@/containers/Layout-admin/layoutAdmin"

// components
import PageUsers from "@/components/PageComponents/PageUsers/pageUsers"

// utils
import FontStyles from "@/utils/fonts/fontStyles"


const Users = () => {
    return (
        <>
            <Normalize />
            <FontStyles />
            <PageUsers />
        </>
    )
}

export default withLayout(Users)
