import {useField, Field} from 'formik' 
import { ChipInput } from "material-ui-formik-components";

interface IProps {
	name: string
}

const TagsInput = (props: IProps) => {
	const [field, meta, helpers] = useField(props.name);
	return (
		<Field
			name={field.name}
			component={ChipInput}
			label="Your tags"
			required={false}
			sx={{border: '1px solid #DFE0EB'}}
		/>
	)
}

export default TagsInput