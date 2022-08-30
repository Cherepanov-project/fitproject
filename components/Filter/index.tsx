import React, {useState, useEffect, useMemo, ChangeEvent} from "react"
import Image from "next/image"
import {
    StyledButtonSort,
    StyledDropdown,
    StyledFilterOption,
    StyledLabel,
    StyledInput
} from "@/components/Filter/filter.styles"
import { imageFilter } from "@/common/images/filterMenu"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Submenu from "@/components/Submenu"
import {useRouter} from "next/router";
import {
    articlesFilterOptions, articlesSubOptions,
    recipeFilterOptions,
    recipeSubOptions,
    workoutFilterOptions,
    workoutSubOptions
} from "@/models/filterSorting/filters";

//вся возня с toUpperCase/toLowerCase связана с тем что на workouts значения полей приходят капсом
//возможно это можно обойти другим способом

const CheckPathForFilter = (Component) => {
    return function Hoc(props) {
        const {asPath} = useRouter()
        let path = asPath.split("/").pop()
        const [filterOptions, setFilterOptions] = useState([])
        const [subOptions, setSubOptions] = useState({})

        useEffect(() => {
            if (path === "recipes") {
                setFilterOptions(recipeFilterOptions)
                setSubOptions(recipeSubOptions)
            }
            if (path === "workouts") {
                setFilterOptions(workoutFilterOptions)
                setSubOptions(workoutSubOptions)
            }
            if (path === 'articles') {
                setFilterOptions(articlesFilterOptions)
                setSubOptions(articlesSubOptions)
            }
        }, [path]);

        return <Component {...props} filterOptions={filterOptions} subOptions={subOptions} />
    }
}

const Filter = ({data, deleteFilter, filterOptions, subOptions, startFilter}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const [submenuActive, setSubmenuActive] = useState(false);
    // const [animate, setAnimate] = useState<boolean>(false)

    const [filterActive, setFilterActive] = useState<string>('')
    const handleSelect = (e) => {
        setFilterActive(e.target.value.toUpperCase())
        setSubmenuActive(true)
    }

    const minMaxValues = useMemo(() => {
            const arr = data.map((el) => {
                return el[filterActive.toLowerCase()]
            })
            return {max: Math.max(...arr), min: Math.min(...arr)};
    }, [filterActive, menuActive])

    const handleBackArrow = () => {
        setSubmenuActive(false)
    }

    const handleSubFilter = (e: ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
        if (isChecked) {
            startFilter(filterActive, e.target.value)
        } else {
            deleteFilter(filterActive, e.target.value)
        }
    }

    const handleCustomFilter = (min: number, max: number) => {
        startFilter(filterActive, [min, max], 'numerical')
    }

    const filters = filterOptions.map(item => {
        return (
            <StyledFilterOption key={item}>
                <StyledLabel>{item}
                    <ArrowForwardIosIcon sx={{height: 14, marginLeft: "auto", marginRight: 0}}/>
                    <StyledInput type="checkbox" name={item} onChange={(e) => handleSelect(e)} value={item}/>
                </StyledLabel>
            </StyledFilterOption>
        )
    })

    return (
        <>
            <StyledButtonSort onClick={() => { setMenuActive(!menuActive) }}>
                <Image src={imageFilter} alt="image-filter"/>
                Filter
            </StyledButtonSort>
            {menuActive ? (
                <>
                    <StyledDropdown>
                        {filters}
                    </StyledDropdown>
                    {submenuActive ? (<Submenu handleCustomFilter={handleCustomFilter}
                                               min={minMaxValues.min} max={minMaxValues.max}
                              subOptions={subOptions[filterActive]}
                              handleBackArrow={handleBackArrow} handleSubFilter={handleSubFilter}/>) : null}
                </>
            ) : null}
        </>
    )
}

export default CheckPathForFilter(Filter)
