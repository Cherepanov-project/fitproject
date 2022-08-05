import React, { useState } from "react"
import Image from "next/image"
import { ButtonSort, Dropdown, StyledInput, StyledLabel } from "@/components/FilterMenu/sortFilter.styles"
import { imageSort } from "@/common/images/filterMenu"

const SortFilter = ({ filterNames, changeSorting, activeSorting }) => {
    const [ menuActive, setMenuActive ] = useState<boolean>(false)
    console.log(activeSorting)
    const handleChange = (e) => {
        if (!activeSorting.includes(e.target.name)) {
            changeSorting(e.target.name, 'increase')
        } else if (activeSorting.includes(e.target.name)) {
            changeSorting(e.target.name, 'decrease')
        }
        setMenuActive(!menuActive)
    }

    const filters = filterNames.map(filter => {
        let isChecked = activeSorting.length === 0 ? false : activeSorting.includes(filter.name);
        return (
            <StyledLabel key={filter.name}>
                <StyledInput name={filter.name} type={'checkbox'} checked={isChecked} onChange={handleChange}/>
                <span>{filter.name}</span>
            </StyledLabel>
        )
    })

    return (
        <>
        <ButtonSort onClick={() => setMenuActive(!menuActive)}>
            <Image src={imageSort} alt="sort" />
            Sort
        </ButtonSort>
        {menuActive ? (
            <Dropdown>
                {filters}
            </Dropdown>
        ) : null}
        </>

    )
}

export default SortFilter