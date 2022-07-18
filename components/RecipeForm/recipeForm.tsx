import React from "react"
import { useMutation } from "react-query"
import { Button } from "@mui/material"
import { Formik, Form } from "formik"

import FileUpload from "../AdminFormComponents/Upload/fileUpload"
import FormFieldLong from "../AdminFormComponents/FormFeildLong"
import FieldList from "../AdminFormComponents/FieldList/fieldList"
import EditorMCE from "../AdminFormComponents/EditorMCE/editorMCE"
import { validationRecipies } from "@/utils/validationSchema"
import IngredientsField from "../AdminFormComponents/IngredientsField/ingredientsFiled"
import { postRecipe, putRecipeUpdate } from "@/API/recipes"
import { IPostRecipe } from "@/API/api.interface"
import { IRecipeFormProps } from "./recipeForm.interface"
import { ContentWrapper, FormTitle, FormWrapper, SecondaryText } from "./recipeForm.styles"

const RecipeForm: React.FC<IRecipeFormProps> = ({ title, recipeData }) => {
    const { mutate: addNewRecipe, isLoading } = useMutation(
        (formData: IPostRecipe) => {
            if (recipeData) {
                return putRecipeUpdate({
                    id: +recipeData.id,
                    description: formData.description,
                })
            }
            return postRecipe(formData)
        }
    )

    return (
        <ContentWrapper>
            <FormTitle>{title}</FormTitle>
            <Formik
                initialValues={{
                    header: "",
                    description: recipeData?.description || "",
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
                validationSchema={validationRecipies}
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

export default RecipeForm
