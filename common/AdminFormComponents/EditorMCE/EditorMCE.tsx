import { useField } from "formik"
import { Editor } from "@tinymce/tinymce-react"

interface IProps {
    name: string
}

const EditorMCE: React.FC<IProps> = ({ name }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <div>
            <Editor
                id="article_body"
                init={{
                    height: 450,
                    menubar: false,
                    plugins:
                        "a11ychecker advcode casechange export formatpainter link image code autolink code lists  emoticons",
                    toolbar:
                        "bold italic underline | link image code | alignleft aligncenter alignright emoticons",
                }}
                onEditorChange={e => {
                    field.onChange({ target: { name: field.name, value: e } })
                }}
                onBlur={field.onBlur}
            />
        </div>
    )
}

export default EditorMCE
