import React, { FC } from "react"
import { IProps } from "./checkbox.interfaces"
import { StyledSubInput } from "./checkbox.styles"

const Checkbox: FC<IProps> = ({ isChecked, checkbox, handleFilter }) => {
    return (
        <StyledSubInput
            type="checkbox"
            name={checkbox}
            checked={isChecked}
            onChange={(event) => handleFilter(event.target.value)}
            value={checkbox}
        />
    )
}

export default Checkbox