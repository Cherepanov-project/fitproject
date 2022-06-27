import { TextField, Typography, Button } from "@mui/material"
import { useState } from "react"
import FileUpload from "../AdminFormComponents/upload/FileUpload"
import * as yup from "yup"
import { FieldArray, Formik, Form, Field } from "formik"
import FormFeildLong from "../AdminFormComponents/FormFeildLong"
import FieldList from "../AdminFormComponents/FieldList/FieldList"
import EditorMCE from "../AdminFormComponents/EditorMCE/EditorMCE"
import { INutrilon, nutrilonsMapped } from "../../model/recipes/index"
import { validationRecipies } from "../../utils/validationSchema"

import IngredientsField from "../AdminFormComponents/IngredientsField/IngredientsFiled"

import {
    ContentWrapper,
    FormTitle,
    FormWrapper,
    SecondaryText,
} from "./RecipeForm.style"

const RecipeForm = ({ title }) => {
    return (
        <ContentWrapper>
            <FormTitle>{title}</FormTitle>
            <Formik
                initialValues={{
                    header: "",
                    description: "",
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
                onSubmit={values => console.log(values)}
                render={({ values }) => (
                    <Form autoComplete="off">
                        <FormWrapper>
                            <SecondaryText>Header</SecondaryText>
                            <FormFeildLong name="header" placeholder="Text" />
                            <SecondaryText>Preview image</SecondaryText>
                            <FileUpload />
                            <SecondaryText>Short description</SecondaryText>
                            <FormFeildLong
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
