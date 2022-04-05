export interface IIngredient {
	name: string;
	description: string;
}

export interface INutritionValues {
	name: string;
	calories: number;
	fats: number;
	carbs: number;
	protein: number;
}

export interface INutrilon {
	name: string;
	formik: string;
}

export const nutrilonsMapped = [
	{name:'Carbs', formik:'carbs'},
	{name: 'Proteins', formik: 'proteins'},
	{name: 'Fats', formik: 'fats'},
	{name: 'Calories', formik: 'calories'}
]

export const recipesValues = {
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
}

