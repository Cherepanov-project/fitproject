import React, { FC } from "react"
import Checkbox from "@/components/Checkbox";
import { StyleLabel } from "@/components/CheckboxesSubmenu/checkboxesSubmenu.style";
import { IProps } from "@/components/CheckboxesSubmenu/checkboxesSubmenu.interface";

const CheckboxesSubmenu: FC<IProps> = ({ subOptions, handleFilter }) => {
    const options = Object.keys(subOptions)
    const submenus = options.map(item => {
        return (
            <StyleLabel key={item}>
                <Checkbox isChecked={subOptions[item]} checkbox={item} handleFilter={handleFilter}/>
                <span>{item}</span>
            </StyleLabel>
        )
    });

    return <>{submenus}</>;
}

export default CheckboxesSubmenu
