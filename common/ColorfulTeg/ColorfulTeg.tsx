import { FC } from "react"
import { Tegs } from "./ColorfulTeg.style"

interface ColorfulTegProp {
    text: string
    color?: string
    brRad?: string
    backgroundColor?: string
}

const ColorfulTeg: FC<ColorfulTegProp> = ({
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
