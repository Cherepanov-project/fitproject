import React, { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { StyledButtonSort, StyledDropdown, StyledFilterOption, StyledLabel, StyledInput } from "@/components/FilterMenu/filter.styles"
import  { imageFilter } from "@/common/images/filterMenu"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Submenus from "@/components/FilterMenu/submenus"
import {IFilterData} from "@/components/FilterMenu/filterMenu.interface"

const Filter = ({ data, sortedD, updateData }) => {
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const [animate, setAnimate] = useState<boolean>(false)
    const [filterActive, setFilterActive] = useState<string>('CATEGORY')
    const [subFilter, setSubFilter] = useState<string>('10000')
    const [filteredData, setFilteredData] = useState<Array<IFilterData>>([...data])
    

    let filterOptions = []
    let subOptions = {}
    //move to models
    if (path === "workouts") {
        filterOptions = ["Category", "Area","Type"]
        subOptions = {
                CATEGORY: ["cardio", "strength" ],
                AREA: ["legs", "chest", "breast", "arms"],
                TYPE: []
            }
    }
    if (path === "recipes") {
        filterOptions = ["Calorie", "Protein","Category"]
        subOptions = {
                CALORIE: ["1500", "2500", "3500" ],
                PROTEIN: ["200", "300", "400"],
                CATEGORY: [] //for mealtype 
            }
    }
    const handleSelect = (e) => {
        setFilterActive(e.target.value.toUpperCase())
        setAnimate(true)
    }
    const handleBackArrow = () => {
        setAnimate(false)
        setSubFilter('')
        updateData(data)
    }

    const handleSubFilter = (e) => {
        setSubFilter(e.target.value)
        const filtered = filtering(sortedD, filterActive.toLowerCase(), e.target.value)
        setFilteredData(filtered)
        updateData(filtered)
    }
    
    //to utils? 
    const filtering = (array, filterBy, value) => {
        const val = isNaN(parseInt(value)) ? value : parseInt(value)
        let filter = array.filter(element => {
            return element[filterBy] < val
        })
        return filter
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
