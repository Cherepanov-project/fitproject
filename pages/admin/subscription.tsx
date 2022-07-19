import React from "react"
import { Normalize } from "styled-normalize"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import FontStyles from "@/utils/fonts/fontStyles"

const Subscription = () => {
    return (
        <>
            <Normalize />
            <FontStyles />
            <div>Subscription</div>
        </>
    )
}

export default withLayout(Subscription)
