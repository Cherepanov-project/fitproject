import React from "react"
import { Tegs } from "./ColorfulTeg.style"

interface IColorfulTegProp {
    text: string
    color?: string
    brRad?: string
    backgroundColor?: string
}

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
