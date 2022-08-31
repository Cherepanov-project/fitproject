import React, { FC } from "react"
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
import { Formik } from "formik";

const Submenu: FC<Props> = ({selected, handleCustomFilter, subOptions, handleBackArrow, handleSubFilter, min, max}) => {
    const submenus = subOptions.values?.map(item => {
        const isChecked = (selected?.includes(item));
        return (
            <StyledSubLabel key={item}>
                <Checkbox isChecked={isChecked} checkbox={item} handleSubFilter={handleSubFilter}/>
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
                    <Formik
                    initialValues={{ from: selected ? selected[0] : '', to: selected ? selected[1] : '' }}
                    validate={(values) => {
                        if (values.to < values.from) {
                            values.to = values.from
                        }
                        if (values.to > max) {
                            values.to = max
                        }
                        if (values.from < min) {
                            values.from = min
                        }
                        if (values.from > values.to) {
                            values.from = values.to
                        }
                    }}
                    onSubmit={(values) => handleCustomFilter(+values.from, +values.to)}
                    >
                        {({values, handleBlur, handleChange, handleSubmit}) => (
                            <StyleBlockInputs onSubmit={handleSubmit}>
                                <StyleLabelForInput>
                                    From
                                <StyleInput placeholder={min.toString()} type='number' name='from' onChange={handleChange} onBlur={handleBlur} value={values.from}></StyleInput>
                                </StyleLabelForInput>
                                <StyleLabelForInput>
                                    To
                                    <StyleInput placeholder={max.toString()} type='number' name='to' onChange={handleChange} onBlur={handleBlur} value={values.to}></StyleInput>
                                </StyleLabelForInput>
                                <StyleSubmit type={"submit"} onSubmit={handleSubmit}>Filter!</StyleSubmit>
                            </StyleBlockInputs>
                        )}
                    </Formik>)
                    : submenus}
            </StyledSubmenuOption>
        </StyledSubmenu>
    )
}

export default Submenu