import React from 'react';
import {withLayout} from "../../layouts/Layout-admin/Layout-admin";
import { useState, useEffect } from "react";
import FilterBtn from '../../components/RecipiesContainer/FilterBtn/filter';
import { ContentListType, contentList } from '../../model/recipies/recipiesList';
import { ContainerList } from '../../components/RecipiesContainer/ResipiesList/recipies';
import Recipie from '../../components/RecipiesContainer/ResipiesList/recipie' 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ContentList, FooterRecipies } from './overview/overviewStyles';
import CreateForm from '../../components/RecipiesContainer/AddBtn/addForm'
import Pagination from '../../components/RecipiesContainer/Pagination/pagination';
import ColumnName from '../../components/RecipiesContainer/ColumnName/columnName';


const Recipes = () => {

    const [arrRecipies, setArrRecipies] = useState<ContentListType[]>([]);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(8);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
      setArrRecipies(contentList)
      setPage(0)
    }, [] )

    const resipie = arrRecipies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((el: ContentListType) => { 
      return (
          < Recipie 
            key={el.id}
            id = {el.id}
            portionSize = {el.uniqueRecipeField.portionSize}
            dishType = {el.uniqueRecipeField.type}
            proteins = {el.proteins}
            fats = {el.fats}
            carbohydrates = {el.carbohydrates}
            name = {el.name} 
            calories = {el.calories} 
            status = {el.status}
          />
       )
    })

    return (
        <ContentList>
            <ContainerList>
                <FilterBtn/>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1120}}>
                        <ColumnName/>
                        <TableBody>
                            {resipie}
                        </TableBody>
                    </Table>
                </TableContainer>
                <FooterRecipies>
                    <CreateForm/>
                    <Pagination 
                       arrRecipies = {arrRecipies} 
                       page = {page}
                       handleChangePage = {handleChangePage}
                       rowsPerPage = {rowsPerPage}
                       handleChangeRowsPerPage = {handleChangeRowsPerPage}
                    />
                </FooterRecipies>
              </ContainerList>
        </ContentList>
    )
};

export default withLayout(Recipes);






