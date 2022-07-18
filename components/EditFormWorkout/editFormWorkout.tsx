import React from "react"
import { useMutation } from "react-query"
import { Button } from "@mui/material"
import { Formik, Form } from "formik"

import FileUpload from "../AdminFormComponents/Upload/fileUpload"
import FormFieldLong from "../AdminFormComponents/FormFeildLong"
import FieldList from "../AdminFormComponents/FieldList/fieldList"
import EditorMCE from "../AdminFormComponents/EditorMCE/editorMCE"
import { validationExercises } from "../../utils/validationSchema"
import IngredientsField from "../AdminFormComponents/IngredientsField/ingredientsFiled"
import { postWorkout, putWorkoutUpdate } from "../../API/workouts"
import { IPostWorkout } from "../../API/api.interface"
import { IWorkoutFormProps } from "./editFormWorkout.interface"
import { ContentWrapper, FormTitle, FormWrapper, SecondaryText } from "./editFormWorkout.styles"

const EditFormWorkout: React.FC<IWorkoutFormProps> = ({ title, workoutData }) => {
    const { mutate: addNewRecipe, isLoading } = useMutation(
        (formData: IPostWorkout) => {
            if (workoutData) {
                return putWorkoutUpdate({
                    id: +workoutData.id,
                    description: formData.description,
                })
            }
            return postWorkout(formData)
        }
    )

    return (
        <ContentWrapper>
            <FormTitle>{title}</FormTitle>
            <Formik
                initialValues={{
                    header: "",
                    description: workoutData?.description || "",
                    nutritionValues: [
                        { name: "calories", value: 0 },
                        { name: "protein", value: 0 },
                        { name: "fats", value: 0 },
                        { name: "carbs", value: 0 },
                    ],
                    ingredients: [
                        {
                            name: "",
                            description: "",
                        },
                    ],
                    recipe: "",
                }}
                validationSchema={validationExercises}
                onSubmit={(values, { resetForm }) => {
                    const data = {
                        name: values.header,
                        description: values.description,
                    }

                    addNewRecipe(data, { onSuccess: () => resetForm() })
                }}
                render={({ values }) => (
                    <Form autoComplete="off">
                        <FormWrapper>
                            <SecondaryText>Header</SecondaryText>
                            <FormFieldLong name="header" placeholder="Text" />
                            <SecondaryText>Preview image</SecondaryText>
                            <FileUpload />
                            <SecondaryText>Short description</SecondaryText>
                            <FormFieldLong
                                name="description"
                                placeholder="Text"
                            />
                            <SecondaryText>Ingredients</SecondaryText>
                            <IngredientsField name="ingredients" />

                            <SecondaryText>Nutrition Values</SecondaryText>

                            <FieldList
                                name={"nutritionValues"}
                                values={values}
                            />

                            <SecondaryText>Recipe</SecondaryText>
                            <EditorMCE name="recipe" />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ margin: "30px 0 30px 90%" }}
                            >
                                Create
                            </Button>
                        </FormWrapper>
                    </Form>
                )}
            />
        </ContentWrapper>
    )
}

export default EditFormWorkout
