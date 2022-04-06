import { useField } from 'formik' 
import { Editor } from '@tinymce/tinymce-react';

interface IProps {
	name: string
}

const EditorMCE: React.FC<IProps> = (props: IProps) => {
	const [field, meta, helpers] = useField(props.name);

	return (
			<Editor
				id='article_body'
				init = {{
					height: 450,
					menubar: false,
					plugins: 'a11ychecker advcode casechange export formatpainter link image code autolink code lists  emoticons',
					toolbar: 'bold italic underline | link image code | alignleft aligncenter alignright emoticons' 
				}}
				onEditorChange={(e) => {
					field.onChange({ target: { name: field.name, value: e } })
				}}
				onBlur={field.onBlur}
			/>
	)
}

export default EditorMCE
