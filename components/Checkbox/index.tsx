import React, { ChangeEvent, FC, useState } from "react"
import { StyledSubInput} from "@/components/Filter/filter.styles"
import { Props } from "./checkbox.interfaces"

const Checkbox: FC<Props> = ({checkbox, handleSubFilter}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    // const [noSort, setNoSort] = useState(true);

    const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (isChecked) {
            handleSubFilter()
        }
        setIsChecked(!isChecked)
        handleSubFilter(event)
    }
    console.log(checkbox);

    return (
        <StyledSubInput type="checkbox" name={checkbox} checked={isChecked} onChange={(event) => handleClick(event)}
                        value={checkbox}/>
    )
}

export default Checkbox