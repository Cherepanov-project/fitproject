import React, { useState } from "react";
import Image from "next/image";
import { imageDescending, imageAscending } from "@/common/images/filterMenu";
import {
    StyleDropdown,
    StyleBlockButtons,
    StyleButton,
    StyleLabelSort,
    StyleLabel,
    StyleInput
} from "@/components/Sort/sort.styles";

const Sort = ({sortSelect, changeSortData}) => {
    const [noSort, setNoSort] = useState<boolean>(true)

    const handleClick = (value, type) => {
        setNoSort(false)
        changeSortData(false, value, type)
    }

    const sortValues = sortSelect.map(filter => {
        return (
            <StyleLabelSort key={filter.name}>
                <span>{filter.name}</span>
                <StyleBlockButtons>
                    <StyleButton>
                        <Image src={imageDescending} alt="Sort Descending" onClick={() => {
                            handleClick(filter.sorting, 'decrease')
                        }}/>
                    </StyleButton>
                    <StyleButton>
                        <Image src={imageAscending} alt="Sort Ascending" onClick={() => {
                            handleClick(filter.sorting, 'increase')
                        }}/>
                    </StyleButton>
                </StyleBlockButtons>
            </StyleLabelSort>
        )
    })
    return (
        <>
            <StyleDropdown>
                <StyleLabel key="noSorting">
                    <StyleInput name="noSorting" type="checkbox" checked={noSort} onChange={() => {
                        setNoSort(true)
                        changeSortData(true)
                    }}/>
                    <span>No sorting</span>
                </StyleLabel>
                {sortValues}
            </StyleDropdown>
        </>
    )
}

export default Sort