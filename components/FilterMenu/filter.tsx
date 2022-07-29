import React, { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { StyledContainer, StyledButtonSort, StyledDropdown, StyledFilterOption, StyledLabel, StyledInput } from "@/components/FilterMenu/filter.styles"
import  { imageFilter } from "@/common/images/filterMenu"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Submenus from "@/components/FilterMenu/submenus"

const Filter = ({ data }) => {
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const [animate, setAnimate] = useState<boolean>(false)
    const [filterActive, setFilterActive] = useState<string>('CATEGORY')
    const [subFilter, setSubFilter] = useState<Array<string>>([])
    

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
                CALORIE: ["1000", "2000", "3000" ],
                PROTEIN: ["200", "300", "400"],
                CATEGORY: [] //for mealtype 
            }
    }
    const handleSelect = (e) => {
        setFilterActive(e.target.name.toUpperCase())
        setAnimate(true)
    }
    const handleBackArrow = () => {
        setAnimate(false)
    }
    const handleSubFilter = (e) => {
        if (subFilter.includes(e.target.name)){
            const idx = subFilter.findIndex((el) => el === e.target.name);
            const [...newArr] = subFilter;
            newArr.splice(idx, 1);
            setSubFilter(newArr)
        } else {
            const [...newArr] = subFilter;
            newArr.push(e.target.name)
            setSubFilter(newArr)
        }
    }

    const filters = filterOptions.map(item => {
        return (
        <StyledFilterOption key={item} animate={animate}>
        <StyledLabel >{item}
            <ArrowForwardIosIcon sx={{height: 14, marginLeft: "auto", marginRight: 0}} />
            <StyledInput type="checkbox" name={item} onChange={handleSelect}/>
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
            <Submenus subOptions={subOptions[filterActive]} handleBackArrow={handleBackArrow} handleSubFilter={handleSubFilter} animate={animate}/>
            </>
        ) : null}
        </>
    )
}

export default Filter
