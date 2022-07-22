import React from "react"
import { useRouter } from 'next/router'
import { useMutation } from "react-query"
import { Button } from "@mui/material"
import { Formik, Form } from "formik"

import FileUpload from "../AdminFormComponents/Upload/fileUpload"
import FormFieldLong from "../AdminFormComponents/FormFeildLong"
import FieldList from "../AdminFormComponents/FieldList/fieldList"
import EditorMCE from "../AdminFormComponents/EditorMCE/editorMCE"
import { validationRecipes } from "@/utils/validationSchema"
import IngredientsField from "../AdminFormComponents/IngredientsField/ingredientsFiled"
import { postRecipe, putRecipeUpdate, putRecipeName } from "@/API/recipes"
import { IPostRecipe } from "@/API/api.interface"
import { IRecipeFormProps } from "./editFormRecipe.interface"
import { ContentWrapper, FormTitle, FormWrapper, SecondaryText } from "./editFormRecipe.styles"

const EditFormRecipe: React.FC<IRecipeFormProps> = ({ title, recipeData }) => {
    const router = useRouter()
    const { mutate: addNewRecipe, isLoading } = useMutation(
        (formData: IPostRecipe) => {
            if (recipeData) {
                if (recipeData.name !== formData.name) {
                    return putRecipeName({
                        id: +recipeData.id,
                        name: formData.name
                    })
                }
                return putRecipeUpdate({
                    id: +recipeData.id,
                    description: formData.description,
                    picUrl: formData.picUrl,
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
                    header: recipeData?.name || "",
                    description: recipeData?.description || "",
                    nutritionValues: [
                        { name: "calories", value: recipeData?.calorie || 0 },
                        { name: "protein", value: recipeData?.protein || 0 },
                        { name: "fats", value: recipeData?.fat || 0 },
                        { name: "carbs", value: recipeData?.carbohydrate || 0 },
                    ],
                    ingredients: [
                        {
                            name: "",
                            description: "",
                        },
                    ],
                    recipe: "",
                    picUrl: recipeData?.picUrl || "null",
                }}
                validationSchema={validationRecipes}
                onSubmit={(values, { resetForm }) => {
                    const data = {
                        name: values.header,
                        description: values.description,
                        picUrl: values.picUrl,
                    }
                    addNewRecipe(data, { onSuccess: () => {
                        resetForm()
                        router.push(`/admin/recipes`)
                    } })
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

export default EditFormRecipe
