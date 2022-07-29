import React from "react"
import { StyledSubmenu, StyledSubmenuOption, StyledButton, StyledSubLabel, StyledSubInput } from "@/components/FilterMenu/filter.styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Submenus = ({subOptions, handleBackArrow, animate, handleSubFilter}) => {
    const submenus = !subOptions ? null : (subOptions.map(item => {
        return (
            <StyledSubLabel key={item}>
                <StyledSubInput type="checkbox" name={item} onChange={handleSubFilter}></StyledSubInput>
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
    } else return null

}
/*
<IconButton sx={{borderRadius: "50%", width: "24px", height: "24px", border: "1px solid green", textAlign: "center"}}>

const Submenus = ({subOptions}) => {
    const submenus = subOptions.map((item, index) => {
        return (
            <div key={index}>{item.options.map((option) => {
            return (
                <label key={option}>
                    <input type="checkbox" name={option}></input>
                    <span>{option}</span>
                </label>
        )
        })}</div>)
    })
    return (
        <div>
            <button>back</button>
            {submenus}
        </div>
    )
}*/

export default Submenus