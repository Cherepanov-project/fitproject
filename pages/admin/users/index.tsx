import React from "react"
import { Normalize } from "styled-normalize"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { userList } from "@/models/userList/userList"
import PageUsers from "@/components/PageComponents/PageUsers/pageUsers"
import FontStyles from "@/utils/fonts/fontStyles"

const Users = () => {
    return (
        <>
            <Normalize />
            <FontStyles />
            <PageUsers data={userList} />
        </>
    )
}

export default withLayout(Users)
