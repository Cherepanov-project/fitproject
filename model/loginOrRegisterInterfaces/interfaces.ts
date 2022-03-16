import { FormikConfig, FormikValues } from "formik";

export interface IRegisterForm {
	userName: string;
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	confirmPassword: string;
	age?: number;
	sex?: string;
	contactNumber?: number;
	meal?: string;
	exercises?: string;
}

export interface ILoginForm {
	login: string;
	password: string;
}

export interface IFormStatus {
	message: string;
	type: string;
	showPassword?: boolean;
}

export interface IFormStatusProps {
	[key: string]: IFormStatus;
}

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
	label: string;
}

export interface IInputForm {
	placeholder: string;
	name: string;
	type?: string;
	secrecy?: boolean;
}

export interface IFormikStepper {
	children: FormikStepProps,
	initialValues: IRegisterForm,
	onSubmit: Function
}
