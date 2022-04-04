/*
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FilterBtn from "../filterBtn/filter";
import { ContentListType, contentList} from "../../../model/recipies/recipiesList";
import TablePagination from '@mui/material/TablePagination';
import { ContainerList, FooterRecipies } from "./recipies";
import Recipie from "./recipie";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const ShowRecipies = () => {
    const { asPath } = useRouter();
    const [loading, setLoading] = useState<boolean>(true)
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
      console.log(contentList)
      setArrRecipies(contentList)
      setPage(0)
    }, [rowsPerPage] )

    

    const resipie = arrRecipies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((el: ContentListType) => { 
        return (
            < Recipie 
              key={el.id}
              portionSize = {el.uniqueRecipeField.portionSize}
              dishType = {el.uniqueRecipeField.type}
              proteins = {el.proteins}
              fat = {el.fat}
              carbohydrates = {el.carbohydrates}
              name = {el.name} 
              calories = {el.calories} 
              status = {el.status}
            />
         )
      })

    return (
      <ContainerList>
        <FilterBtn arrRecipies = {arrRecipies}/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1120}}>
            <TableHead>
              <TableRow >
                <TableCell sx = {{paddingLeft: 3.5, paddingBottom: 1, color: '#9FA2B4',fontSize: 15, width: 250}}>Dish info</TableCell>
                <TableCell sx = {{paddingLeft: 15, paddingBottom: 1, color: '#9FA2B4', fontSize: 15, width: 95}}>Dish name</TableCell>
                <TableCell sx = {{paddingLeft: 15, paddingBottom: 1, color: '#9FA2B4', fontSize: 15, lineHeight: 1}}>Calories (100 grams)</TableCell>
                <TableCell sx = {{paddingLeft: 14, paddingBottom: 1, color: '#9FA2B4', fontSize: 15}}>Meal Type</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resipie}
            </TableBody>
          </Table>
        </TableContainer>
        < FooterRecipies>
        <Button variant="contained" 
          sx = {{height: "40px", fontSize: "12px", verticalAlign: 'middle', backgroundColor: "grey", borderRadius: "20px", 
            marginTop: 2.5, marginLeft: 3.5}}>Add recipie
        </Button> 
        <TablePagination
          rowsPerPageOptions={[8,10]}
          component="div"
          count={arrRecipies.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx ={{ height: 65, borderBottom: '1px solid #DFE0EB', marginRight: 7, marginLeft: 'auto', marginTop: 2}}
        />
        </FooterRecipies>
      </ContainerList>
    )
}

export default ShowRecipies;
*/
