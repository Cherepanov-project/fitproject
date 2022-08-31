import React, { ChangeEvent, FC, useState } from "react"
import { StyledSubInput} from "@/components/Filter/filter.styles"
import { Props } from "./checkbox.interfaces"

const Checkbox: FC<Props> = ({isChecked, checkbox, handleSubFilter}) => {

    const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isChecked) {
            handleSubFilter(event, true)
        } else {
            handleSubFilter(event, false)
        }
    }

    return (
        <StyledSubInput type="checkbox" name={checkbox} checked={isChecked} onChange={(event) => handleClick(event)}
                        value={checkbox}/>
    )
}

export default Checkbox