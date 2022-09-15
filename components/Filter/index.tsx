import React, { useState, useMemo, FC } from "react"
import {
    StyledDropdown,
    StyledFilterOption,
    StyledLabel,
    StyledInput,
    StyleFilter,
    StyledButton,
    StyleSubmenu
} from "@/components/Filter/filter.styles"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IProps } from "@/components/Filter/filter.interface";
import NumericalSubmenu from "@/components/NumericalSubmenu";
import CheckboxesSubmenu from "@/components/CheckboxesSubmenu";
import checkNameFilter from "@/utils/checkNameFilter";

//вся возня с toUpperCase/toLowerCase связана с тем что на workouts значения полей приходят капсом
//возможно это можно обойти другим способом

const Filter: FC<IProps> = ({ data, options, subOptions, changeFilterData }) => {
    const [submenuActive, setSubmenuActive] = useState(false)
    const [filterActive, setFilterActive] = useState<string>('')

    const isNumericalOptions = (options: any): options is [number, number] | [] => Array.isArray(options);
    const subOptionsActive = subOptions[filterActive];

    const handleSelect = (e) => {
        const string = checkNameFilter(e.target.value)
        setFilterActive(string)
        setSubmenuActive(true)
    }

    const minMaxValues = useMemo(() => {
        if (isNumericalOptions) {
            const arr = data.map((el) => {
                return el[filterActive]
            })
            return { max: Math.max(...arr), min: Math.min(...arr) };
        }
    }, [filterActive])

    const handleBackArrow = () => {
        setSubmenuActive(false)
    }

    const handleFilter = (value: string | [number, number]) => {
        changeFilterData(filterActive, value)
    }

    const filters = options.map(item => {
        return (
            <StyledFilterOption key={item}>
                <StyledLabel>{item}
                    <ArrowForwardIosIcon sx={{ height: 14, marginLeft: "auto", marginRight: 0 }}/>
                    <StyledInput type="checkbox"
                        name={item}
                        onChange={(e) => handleSelect(e)}
                        value={item}
                    />
                </StyledLabel>
            </StyledFilterOption>
        )
    })

    return (
        <>
            <StyledDropdown>
                {submenuActive ? (
                    <StyleSubmenu>
                        <StyledButton onClick={handleBackArrow}>
                            <ArrowBackIosIcon sx={{ height: 15, verticalAlign: "middle" }}/>
                        </StyledButton>
                        {isNumericalOptions(subOptionsActive) ?
                            <NumericalSubmenu
                                subOptions={subOptionsActive}
                                limitValues={minMaxValues}
                                handleFilter={handleFilter}
                            />
                            : <CheckboxesSubmenu
                                subOptions={subOptionsActive}
                                handleFilter={handleFilter}
                            />
                        }
                    </StyleSubmenu>) : <StyleFilter animate={submenuActive}>{filters}</StyleFilter>
                }
            </StyledDropdown>
        </>
    )
}

export default Filter