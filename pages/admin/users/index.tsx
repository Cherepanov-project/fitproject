import React, { useEffect, useState } from "react"
import { withLayout } from "../../../layouts/Layout-admin/Layout-admin"
import { userList, DataType } from "../../../model/userList/userList"

import PageUsers from "../../../common/page-components/PageUsers/PageUsers"

const Users = () => {
    return <PageUsers data={userList} />
}

export default withLayout(Users)
