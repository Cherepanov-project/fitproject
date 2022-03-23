import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Grid, Typography, Box, Button, Stack} from '@mui/material';
import { Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';
import FileUpload from './upload/FileUpload'
import HeaderInput from './HeaderInput/HeaderInput'
import ShortDescriptionText from './ShortDescriptionInput/ShortDescriptionInput'
import IngredientsFiled from './IngredientsField/IngredientsFiled'
import TagsInput from './TagsInput/TagsInput'
import EditorMCE from './EditorMCE/EditorMCE'
import NutrilonValue from './NutritionValuesField/NutrilonValue'
import {INutrilon, nutrilonsMapped} from '../../model/recipes/index'
import {exercisesValues} from '../../model/exercises/index'
import {recipesValues} from '../../model/recipes/index'
import {articlesValues} from '../../model/articles/index'

interface IIngredient {
	name: string;
	description: string;
}

type TIngredientsList = IIngredient[]

interface EditFormValues {
   headerText: string;
	shortDescriptionText?: string;
	chip?: string[];
	ingredients?: TIngredientsList;
	calories?: string;
	protein?: string;
	fats?: string;
	carbs?: string;
	text: string;
	files: string[];
}

const MainContainer = styled.div`
	border: 1px solid #DFE0EB;
	height: 100%;
	border-radius: 8px;
	background: #FFFFFF;
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





export const RecipiesEditForm = () => {
	const {asPath} = useRouter()
	let path = asPath.split('/').pop()
	let initialValues: EditFormValues
	if (path === 'recipes')  initialValues = recipesValues
	if (path === 'exercises') initialValues = exercisesValues 
	if (path === 'articles') initialValues = articlesValues
	return (
		<>
			<MainContainer>
				<Formik initialValues = {initialValues}
				// validationSchema={validationSchema} // Подключение валидации
				onSubmit = {async (values: EditFormValues) => {
					console.log(values)
				  	return new Promise((res) => setTimeout(res, 2500))
				}}
				>
					{(props) => (
						<Form autoComplete='off' onSubmit={props.handleSubmit} >
							<Grid container direction='column' spacing={2}>
								<Grid item>
									<Typography fontSize='16px' color='#6F7482' mb={2}>
										Header
									</Typography>
									<HeaderInput
										name='headerText'
									/>
								</Grid>
								<Grid item>
									<Typography fontSize='16px' color='#6F7482' mb={2}>
										Preview image
									</Typography>
									<Box>
										<FileUpload 
											name = 'files'
										/>
									</Box>
								</Grid>
								{path === 'recipes' && 
								<Grid item>
									<Typography fontSize='16px' color='#6F7482' mb={2}>
										Short description
									</Typography>
									<ShortDescriptionText
										name="shortDescriptionText"
									/>
								</Grid>}
								{path === 'recipes' && 
								<Grid item>
									<Typography fontSize='16px' color='#6F7482' my={2}>
										Ingredients
									</Typography>
									<IngredientsFiled 
										name='ingredients'
									/>
								</Grid>}
								{path === 'recipes' && 
								<Grid item>
									<Typography fontSize='16px' color='#6F7482'>
										Nutrition Values
									</Typography>
									<Box sx={{my: 2, padding: 2, backgroundColor: '#F5F5F5', borderRadius: 1.25, width: 1}}>
										<Stack direction="row" justifyContent="space-around" alignItems="flex-end" spacing={1}>
											{nutrilonsMapped.map(({name, formik}: INutrilon, index: number): React.ReactNode => {
												return (
													<NutrilonValue 
														key={index}
														formik={formik}
														name={name}
													/>
												)
											})}
										</Stack>
									</Box> 
								</Grid>}
								{path === 'recipes' || path !== 'articles' &&
								<Grid item>
									<TagsInput 
										name='chip'
									/>
								</Grid>}
								<Grid>
									<Box my={2}>
										<Grid item p={1}>
											<Typography fontSize='16px' color='#6F7482' mb={2}>
												Recipe
											</Typography>
											<EditorMCE 
												name='text'
											/>
										</Grid>
									</Box>
								</Grid>
								<Grid container alignItems="center" justifyContent="flex-end" p={1}>
									<Grid item>
										<Button type='submit' variant="contained">Create</Button>
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

