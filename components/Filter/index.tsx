import React, { useState, useEffect } from "react"
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
import { filtering } from "@/utils/filtering"
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

const Filter = ({data, sortedD, updateData, filterOptions, subOptions}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const [animate, setAnimate] = useState<boolean>(false)

    const [filterActive, setFilterActive] = useState<string>('CATEGORY')
    const [subFilter, setSubFilter] = useState<string>('')

    // const [filteredData, setFilteredData] = useState<Array<IFilterData>>([...data])

    const handleSelect = (e) => {
        setFilterActive(e.target.value.toUpperCase())
        setAnimate(true)
    }
    const handleBackArrow = () => {
        setAnimate(false)
        setSubFilter('')
        //updateData(data)
    }

    const handleSubFilter = (e) => {
        if (subFilter) {
            setSubFilter('')
        } else {
            setSubFilter(e.target.value)
        }
    }

    useEffect(() => {
        if (subFilter.trim()) {
            const filtered = filtering(sortedD, filterActive.toLowerCase(), subFilter)
            // setFilteredData([...filtered])
            updateData([...filtered])
        } else {
            updateData([...data])
        }
    }, [subFilter])


    const filters = filterOptions.map(item => {
        return (
            <StyledFilterOption key={item} animate={animate}>
                <StyledLabel>{item}
                    <ArrowForwardIosIcon sx={{height: 14, marginLeft: "auto", marginRight: 0}}/>
                    <StyledInput type="checkbox" name={item} onChange={handleSelect} value={item}/>
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
                    <Submenu animate={animate} subOptions={subOptions[filterActive]}
                           handleBackArrow={handleBackArrow} handleSubFilter={handleSubFilter}/>
                </>
            ) : null}
        </>
    )
}

export default CheckPathForFilter(Filter)
