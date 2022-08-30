import React, {FC, useState} from "react"
import {
    StyledSubmenu,
    StyledSubmenuOption,
    StyledButton,
    StyledSubLabel,
} from "@/components/Filter/filter.styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Checkbox from "@/components/Checkbox";
import {Props} from "@/components/Submenu/submenu.interface";
import {StyleBlockInputs, StyleInput, StyleLabelForInput, StyleSubmit } from "./submenu.style";

const Submenu: FC<Props> = ({handleCustomFilter, subOptions, handleBackArrow, handleSubFilter, min, max}) => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const submenus = subOptions.values?.map(item => {
        return (
            <StyledSubLabel key={item}>
                <Checkbox checkbox={item} handleSubFilter={handleSubFilter}/>
                <span>{item}</span>
            </StyledSubLabel>
        )
    });

    return (
        <StyledSubmenu animate>
            <StyledSubmenuOption animate>
                <StyledButton onClick={handleBackArrow}>
                    <ArrowBackIosIcon sx={{height: 15, verticalAlign: "middle"}}/>
                </StyledButton>
                {subOptions.type === 'numerical' ? (
                    <StyleBlockInputs>
                         <StyleLabelForInput>
                             <span>From</span>
                             <StyleInput type="number" placeholder={`${min}`} onChange={(e) => setMinValue(+e.target.value)}/>
                         </StyleLabelForInput>
                         <StyleLabelForInput>
                             <span>To</span>
                             <StyleInput type="number" onChange={(e) => setMaxValue(+e.target.value)} placeholder={`${max}`} />
                         </StyleLabelForInput>
                        <StyleSubmit type={"button"} onClick={() => handleCustomFilter(minValue, maxValue)}>Filter!</StyleSubmit>
                     </StyleBlockInputs>
                    ) : submenus}
            </StyledSubmenuOption>
        </StyledSubmenu>
    )
}

export default Submenu