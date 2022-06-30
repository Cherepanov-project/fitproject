import styled from "styled-components"
import { useRouter } from "next/router"
import { Grid, Typography, Box, Button, Stack } from "@mui/material"
import { Formik, Form } from "formik"
import React, { useEffect, useState } from "react"

import FileUpload from "../../components/RecipiesEditForm/upload/fileUpload"
import HeaderInput from "../../components/RecipiesEditForm/HeaderInput/headerInput"
import ShortDescriptionText from "../../components/RecipiesEditForm/ShortDescriptionInput/shortDescriptionInput"
import IngredientsFiled from "../../components/RecipiesEditForm/IngredientsField/ingredientsFiled"
import TagsInput from "../../components/RecipiesEditForm/TagsInput/tagsInput"
import EditorMCE from "../../components/RecipiesEditForm/EditorMCE/editorMCE"
import NutritionValue from "../../components/RecipiesEditForm/NutritionValuesField/nutritionValue"
import { INutrition, nutritionMapped } from "../../models/recipes/recipes"
import { exercisesValues } from "../../models/exercises/exercises"
import { articlesValues } from "../../models/articles/articles"
import { withLayout } from "../../containers/Layout-admin/layoutAdmin"
import {
    IContentListType,
    contentList,
} from "../../models/recipies/recipiesList"

interface IIngredient {
    name: string
    description: string
}

type TIngredientsList = IIngredient[]

interface EditFormValues {
    name: string
    headerText: string
    shortDescriptionText?: string
    chip?: string[]
    ingredients?: TIngredientsList
    calories?: number
    proteins?: number
    fats?: number
    carbs?: number
    text: string
    files: string[]
}

const MainContainer = styled.div`
    border: 1px solid #dfe0eb;
    height: 100%;
    border-radius: 8px;
    background: #ffffff;
    margin: 0 40px;
    padding: 30px 100px;
`
// ВАЛИДАЦИЯ (при необходимости)

// const validationSchema = yup.object({
// 	headerText: yup
// 	  .string()
// 	  .required('header text is required'),
// 	shortDescriptionText: yup
// 	  .string()
// 	  .max(90, 'just 90 symbols')
// 	  .required('short description is required'),
//  });

const RecipesEditForm = () => {
    const [arrRecipe, setArrRecipe] = useState<IContentListType[]>([])

    const { asPath, query } = useRouter()
    let path = asPath.split("/").pop()

    let initialValues
    console.log(query)
    // if (path === query.id) {
    //     initialValues = {
    //         headerText: name,
    //         fats: fats,
    //         calories: calories,
    //         proteins: proteins,
    //         carbs: carbohydrates,
    //     }
    // }

    if (path === "exercises") {
        initialValues = exercisesValues
    }
    if (path === "articles") {
        initialValues = articlesValues
    }

    useEffect(() => {
        // тут будет вызываться функция для получения рецепта по id
        contentList.map((el: any) => {
            let aaa = path.split("-").pop()
            if (el.id === aaa) {
                setArrRecipe(el)
            }
        })
    }, [])

    return (
        <>
            <MainContainer>
                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema} // Подключение валидации
                    onSubmit={async (values: EditFormValues) => {
                        return new Promise(res => setTimeout(res, 2500))
                    }}
                    enableReinitialize={true}
                >
                    {props => (
                        <Form autoComplete="off" onSubmit={props.handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Typography
                                        fontSize="16px"
                                        color="#6F7482"
                                        mb={2}
                                    >
                                        Header
                                    </Typography>
                                    <HeaderInput name="headerText" />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        fontSize="16px"
                                        color="#6F7482"
                                        mb={2}
                                    >
                                        Preview image
                                    </Typography>
                                    <Box>
                                        <FileUpload name="files" />
                                    </Box>
                                </Grid>
                                {path === query.id && (
                                    <Grid item>
                                        <Typography
                                            fontSize="16px"
                                            color="#6F7482"
                                            mb={2}
                                        >
                                            Short description
                                        </Typography>
                                        <ShortDescriptionText name="shortDescriptionText" />
                                    </Grid>
                                )}
                                {path === query.id && (
                                    <Grid item>
                                        <Typography
                                            fontSize="16px"
                                            color="#6F7482"
                                            my={2}
                                        >
                                            Ingredients
                                        </Typography>
                                        <IngredientsFiled name="ingredients" />
                                    </Grid>
                                )}
                                {path === query.id && (
                                    <Grid item>
                                        <Typography
                                            fontSize="16px"
                                            color="#6F7482"
                                        >
                                            Nutrition Values
                                        </Typography>
                                        <Box
                                            sx={{
                                                my: 2,
                                                padding: 2,
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 1.25,
                                                width: 1,
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                justifyContent="space-around"
                                                alignItems="flex-end"
                                                spacing={1}
                                            >
                                                {nutritionMapped.map(
                                                    (
                                                        {
                                                            name,
                                                            formik,
                                                        }: INutrition,
                                                        index: number
                                                    ): React.ReactNode => {
                                                        return (
                                                            <NutritionValue
                                                                key={index}
                                                                formik={formik}
                                                                name={name}
                                                            />
                                                        )
                                                    }
                                                )}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                )}
                                {path === query.id ||
                                    (path !== "articles" && (
                                        <Grid item>
                                            <TagsInput name="chip" />
                                        </Grid>
                                    ))}
                                <Grid>
                                    <Box my={2}>
                                        <Grid item p={1}>
                                            <Typography
                                                fontSize="16px"
                                                color="#6F7482"
                                                mb={2}
                                            >
                                                Recipe
                                            </Typography>
                                            <EditorMCE name="text" />
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="flex-end"
                                    p={1}
                                >
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        >
                                            Create
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </MainContainer>
        </>
    )
}

export default withLayout(RecipesEditForm)
