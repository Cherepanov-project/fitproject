import React from "react"
import { StyledSubmenu, StyledSubmenuOption, StyledButton, StyledSubLabel, StyledSubInput } from "@/components/FilterMenu/filter.styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Submenus = ({subOptions, subFilter, handleBackArrow, animate, handleSubFilter}) => {
    const submenus = !subOptions ? null : (subOptions.map(item => {
        let isChecked = subFilter.includes(item)
        return (
            <StyledSubLabel key={item}>
                <StyledSubInput type="checkbox" name={item} checked={isChecked} onChange={handleSubFilter} value={item}></StyledSubInput>
                <span>{item}</span>
            </StyledSubLabel>
        )
    }));
    if (subOptions) {
        return (
            <StyledSubmenu animate={animate}>
                <StyledSubmenuOption animate={animate}>
                    <StyledButton onClick={handleBackArrow}>
                        <ArrowBackIosIcon sx={{ height: 15, verticalAlign: "middle"}}/>
                    </StyledButton>
                    <>{submenus}</>
                </StyledSubmenuOption>
            </StyledSubmenu>
        )
    } else {
        return null
    }

}

export default Submenus