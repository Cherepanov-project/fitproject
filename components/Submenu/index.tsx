import React, { FC } from "react"
import {
    StyledSubmenu,
    StyledSubmenuOption,
    StyledButton,
    StyledSubLabel,
} from "@/components/Filter/filter.styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Checkbox from "@/components/Checkbox";
import { Props } from "@/components/Submenu/submenu.interface";

const Submenu: FC<Props> = ({subOptions, handleBackArrow, animate, handleSubFilter}) => {
    const submenus = subOptions && subOptions.map(item => {
        return (
            <StyledSubLabel key={item}>
                <Checkbox checkbox={item} handleSubFilter={handleSubFilter}/>
                <span>{item}</span>
            </StyledSubLabel>
        )
    });
    return (
        <StyledSubmenu animate={animate}>
            <StyledSubmenuOption animate={animate}>
                <StyledButton onClick={handleBackArrow}>
                    <ArrowBackIosIcon sx={{height: 15, verticalAlign: "middle"}}/>
                </StyledButton>
                <>{submenus}</>
            </StyledSubmenuOption>
        </StyledSubmenu>
    )
}

export default Submenu