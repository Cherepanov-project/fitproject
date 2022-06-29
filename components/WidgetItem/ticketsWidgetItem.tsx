import React from "react"

import Typography from "@mui/material/Typography"

import { WidgetItemContainer, WidgetItemContent } from "./widgetItemStyles"

const TicketsWidgetItem = ({ name, value, padding }): JSX.Element => {
    return (
        <WidgetItemContainer>
            <WidgetItemContent padding={padding}>
                <Typography
                    fontFamily="Mulish"
                    fontSize="14px"
                    color="rgba(37, 39, 51, 1)"
                >
                    {name}
                </Typography>
                <Typography
                    fontFamily="Mulish"
                    fontSize="14px"
                    color="rgba(159, 162, 180, 1)"
                >
                    {value}
                </Typography>
            </WidgetItemContent>
        </WidgetItemContainer>
    )
}

export default TicketsWidgetItem
