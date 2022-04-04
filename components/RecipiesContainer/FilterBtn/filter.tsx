
import React from 'react';
import { ContainerBtn, ButtonAllRecipies, Btns, ButtonSort} from "./filterContent";
import Image from "next/image";
import IconButton from '@mui/material/IconButton';
import imageSort from './images/sort.svg';
import ItemFilter from './itemFilter';


const FilterBtn = () => {

    return (
        <ContainerBtn>
            <ButtonAllRecipies >All recipies</ButtonAllRecipies>
                <Btns>
                <IconButton><ButtonSort><Image src={imageSort}/>Sort</ButtonSort></IconButton>
                <ItemFilter/>
                </Btns>
        </ContainerBtn>
    )
}


export default FilterBtn;
