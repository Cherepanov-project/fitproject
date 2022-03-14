import Header from '../Header/Header'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Grid, Typography, Box, Button, Stack} from '@mui/material';
import { Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';
import FileUpload from './upload/FileUpload'
import HeaderInput from './HeaderInput/HeaderInput.tsx'
import ShortDescriptionText from './ShortDescriptionInput/ShortDescriptionInput.tsx'
import IngredientsFiled from './IngredientsField/IngredientsFiled.tsx'
// import NutritionValuesField from './NutritionValuesField/NutritionValuesField'
import TagsInput from './TagsInput/TagsInput.tsx'
import EditorMCE from './EditorMCE/EditorMCE.tsx'
import NutrilonValue from './NutritionValuesField/NutrilonValue.tsx'

interface IIngredient {
	name: string;
	description: string;
}

type TIngredientsList = IIngredient[]

interface MyFormValues {
   headerText: string;
	shortDescriptionText: string;
	chip: string[];
	ingredients: TIngredientsList;
	calories: string;
	protein: string;
	fats: string;
	carbs: string;
	text: string;
	files: string[];
 }

const MainContainer = styled.div`
	border: 1px solid #DFE0EB;
	height: 100%;
	border-radius: 8px;
	background: #FFFFFF;
	margin-top: 50px;
	padding: 20px 100px;
`

// const validationSchema = yup.object({
// 	headerText: yup
// 	  .string()
// 	  .required('header text is required'),
// 	shortDescriptionText: yup
// 	  .string()
// 	  .max(90, 'just 90 symbols')
// 	  .required('short description is required'),
//  });

const nutrilonsArr = ['carbs', 'protein', 'fats', 'calories']

const RecipiesList: React.FC<MyFormValues> = () => {
	const router = useRouter()
	return (
		<>
			<Header/>
			<MainContainer>
				<Formik initialValues = {{
					headerText: '',
					shortDescriptionText: '',
					chip: [],
					ingredients: [{
						name: '',
						description: ''
					}],
					calories: '',
					protein: '',
					fats: '',
					carbs: '',
					text: '',
					files: []
				}}
				onSubmit = {async (values) => {
					console.log(values)
					console.log(router)
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
								<Grid item>
									<Typography fontSize='16px' color='#6F7482' mb={2}>
										Short description
									</Typography>
									<ShortDescriptionText
										name="shortDescriptionText"
									/>
								</Grid>
								<Grid item>
									<Typography fontSize='16px' color='#6F7482' my={2}>
										Ingredients
									</Typography>
									<IngredientsFiled 
										name='ingredients'
									/>
								</Grid>
								<Grid item>
									<Typography fontSize='16px' color='#6F7482'>
										Nutrition Values
									</Typography>
									<Box sx={{my: 2, padding: 2, backgroundColor: '#F5F5F5', borderRadius: 1.25, width: 1}}>
										<Stack direction="row" justifyContent="space-around" alignItems="flex-end" spacing={1}>
											{nutrilonsArr.map((value: string, index: number) => {
												return (
													<NutrilonValue 
														key={index}
														name={value}
													/>
												)
											})}
										</Stack>
									</Box> 
								</Grid>
								<Grid item>
									<TagsInput 
										name='chip'
									/>
								</Grid>
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

export default RecipiesList