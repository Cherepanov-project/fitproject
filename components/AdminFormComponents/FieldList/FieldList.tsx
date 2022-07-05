import { TextField } from "@mui/material"
import {
    ContentWrapper,
    TextFieldWrap,
    Text,
    ErrorText,
} from "./FieldList.style"
import { FieldArray, Formik, Field, ErrorMessage, useField } from "formik"

const FieldList = ({ values, name }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <ContentWrapper>
            <FieldArray
                name={name}
                render={() => {
                    const nutritionValues = values.nutritionValues
                    return nutritionValues.map((el, i) => (
                        <TextFieldWrap key={i}>
                            <Text>{el.name}</Text>
                            <TextField
                                name={`${name}.${i}.value`}
                                value={el.value}
                                onChange={field.onChange}
                                sx={{
                                    width: "170px",
                                    backgroundColor: "#F8FAFC",
                                }}
                                type="number"
                                error={Boolean(meta.error?.[i])}
                            />

                            <ErrorMessage name={`${name}.${i}.value`}>
                                {msg => <ErrorText>{msg}</ErrorText>}
                            </ErrorMessage>
                        </TextFieldWrap>
                    ))
                }}
            />
        </ContentWrapper>
    )
}
export default FieldList
