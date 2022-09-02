import React, { useState } from "react";
import { StyleBlockButtons, StyleHeader } from "@/styles/admin/articles/articles.styles";
import { Title } from "@/components/FilterMenu/filterMenu.styles";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";
import { ListPage } from "@/components/ListPage";
import Image from "next/image";
import { imageSort } from "@/common/images/filterMenu";
import { ButtonSort } from "@/components/FilterMenu/sortFilter.styles";

const SortAndFilter = ({config: {title, ...configs}}) => {
    const [processData, setProcessData] = useState({sort: {}, filter: {}})
    const [isActiveSort, setIsActiveSort] = useState(false)

    const changeProcessData = (type: 'filter' | 'sort', key, value: string[] | [number, number]) => {
        setProcessData(
            (prev) => {
                prev[type][key] = value
                return ({...prev})
            }
        )
    }

    return (
        <>
            <StyleHeader>
                <Title>{title}</Title>
                <StyleBlockButtons>
                    <ButtonSort onClick={() => setIsActiveSort(!isActiveSort)}>
                        <Image src={imageSort} alt="sort"/>
                        Sort
                    </ButtonSort>
                    {isActiveSort ? <Sort sortSelect={processData.sort}/> : null}
                    <Filter filterSelect={processData.filter}/>
                </StyleBlockButtons>
            </StyleHeader>
            <ListPage config={configs} processData={processData}/>
        </>
    )
}

export default SortAndFilter