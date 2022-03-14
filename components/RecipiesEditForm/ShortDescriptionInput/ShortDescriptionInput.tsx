import {useField} from 'formik' 
import {TextField} from '@mui/material'

interface IProps {
	name: string
}


const ShortDescriptionText: React.FC<IProps> = (props: IProps) => {
	const [field, meta, helpers] = useField(props.name);

	return (
		<TextField
			fullWidth
			id="shortDescriptionText"
			name="shortDescriptionText"
			onChange={field.onChange}
			onBlur={field.onBlur}
			sx={{input: { padding: '10px' }, backgroundColor: '#F8FAFC'}}
		/>
	)
}

export default ShortDescriptionText