import {useField} from 'formik' 
import {TextField, Typography, Box} from '@mui/material'

interface IProps {
	name: string;
}

const NutrilonValue = (props: IProps) => {
	const [field, meta, helpers] = useField(props.name);
	return (
		<Box sx={{mt: 4}}>
			<Typography fontSize='16px' color='#6F7482'>
				{field.name.charAt(0).toUpperCase() + field.name.slice(1)}
			</Typography>
			<TextField
				fullWidth
				id={field.name}
				name={field.name}
				placeholder={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				variant="outlined"
				sx={{input: { padding: '10px' }, bgcolor: '#FFF'}}
			/>
		</Box>
	)
}

export default NutrilonValue