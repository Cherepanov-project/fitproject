import React, { useEffect, useState } from "react"

import { withLayout } from "../../../containers/Layout-admin/layoutAdmin"
import { userList, DataType } from "../../../models/userList/userList"

import PageUsers from "../../../components/PageComponents/PageUsers/pageUsers"

const Users = () => {
    return <PageUsers data={userList} />
}

export default withLayout(Users)
