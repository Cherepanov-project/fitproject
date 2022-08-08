import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { StyledButtonSort, StyledDropdown, StyledFilterOption, StyledLabel, StyledInput } from "@/components/FilterMenu/filter.styles"
import  { imageFilter } from "@/common/images/filterMenu"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Submenus from "@/components/FilterMenu/submenus"
import {IFilterData} from "@/components/FilterMenu/filterMenu.interface"
import { recipeFilterOptions, recipeSubOptions, workoutFilterOptions, workoutSubOptions } from "@/models/filterSorting/filters"
import { filtering } from "@/utils/filtering"

//вся возня с toUpperCase/toLowerCase связана с тем что на workouts значения полей приходят капсом
//возможно это можно обойти другим способом

const Filter = ({ data, sortedD, updateData }) => {
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const [animate, setAnimate] = useState<boolean>(false)

    const [filterActive, setFilterActive] = useState<string>('CATEGORY')
    const [subFilter, setSubFilter] = useState<string>('')

    const [filteredData, setFilteredData] = useState<Array<IFilterData>>([...data])

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
      }, [path]);

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
        setSubFilter(e.target.value)
        if(path === "workouts") {
            const filtered = filtering(sortedD, filterActive.toLowerCase(), e.target.value.toUpperCase())
            setFilteredData([...filtered])
            updateData([...filtered])
        } else {
            const filtered = filtering(sortedD, filterActive.toLowerCase(), e.target.value)
            setFilteredData([...filtered])
            updateData([...filtered])
        }
    }
    

    const filters = filterOptions.map(item => {
        return (
        <StyledFilterOption key={item} animate={animate}>
        <StyledLabel >{item}
            <ArrowForwardIosIcon sx={{height: 14, marginLeft: "auto", marginRight: 0}} />
            <StyledInput type="checkbox" name={item} onChange={handleSelect} value={item}/>
        </StyledLabel>
        </StyledFilterOption>
        )
    })

    return (
        <>
        <StyledButtonSort onClick={() => setMenuActive(!menuActive)}>
            <Image src={imageFilter} alt="image-filter" />
            Filter
        </StyledButtonSort>
        {menuActive ? (
            <>
            <StyledDropdown>
                {filters}
            </StyledDropdown>
            <Submenus subOptions={subOptions[filterActive]} subFilter={subFilter} handleBackArrow={handleBackArrow} handleSubFilter={handleSubFilter} animate={animate}/>
            </>
        ) : null}
        </>
    )
}

export default Filter
