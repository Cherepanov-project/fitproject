import React from "react"

import { Tegs } from "./colorfulTeg.styles"
import { IColorfulTegProp } from "./colorfulTeg.interface"

const ColorfulTeg: React.FC<IColorfulTegProp> = ({
    text,
    color = "#FFFFFF",
    brRad = "100px",
    backgroundColor = "#29CC97",
}) => {
    return (
        <Tegs color={color} brRad={brRad} backgroundColor={backgroundColor}>
            {text}
        </Tegs>
    )
}

export default ColorfulTeg
