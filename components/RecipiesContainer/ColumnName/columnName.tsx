import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/router';


const ColumnName = () => {

    let columnName = []
    const {asPath} = useRouter()
	let path = asPath.split('/').pop()

    if (path === 'recipes') {
		columnName = ['Dish info', 'Dish name', 'Calories (100 grams)', 'Meal Type']
	}

	if (path === 'exercises') {
        console.log('exercises')
    }
	if (path === 'articles') {
        console.log('articles')
    }
    

    return (
        <>  
        <TableHead>
            <TableRow >
                <TableCell sx = {{paddingLeft: 3.5, paddingBottom: 1, color: '#9FA2B4',fontSize: 15, width: 250}}>{columnName[0]}</TableCell>
                <TableCell sx = {{paddingLeft: 15, paddingBottom: 1, color: '#9FA2B4', fontSize: 15, width: 95}}>{columnName[1]}</TableCell>
                <TableCell sx = {{paddingLeft: 15, paddingBottom: 1, color: '#9FA2B4', fontSize: 15, lineHeight: 1}}>{columnName[2]}</TableCell>
                <TableCell sx = {{paddingLeft: 14, paddingBottom: 1, color: '#9FA2B4', fontSize: 15}}>{columnName[3]}</TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
        </>

    )
}

export default ColumnName;