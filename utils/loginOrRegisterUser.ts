import { ILoginForm, IRegisterForm, IFormStatusProps } from "../model/loginOrRegisterInterfaces/interfaces"
import { FormikValues } from "formik";


const formStatusProps: IFormStatusProps = {
	success: {
		message: "You have successfully logged into Your account",
		type: "success",
	},

	duplicate: {
		message: "Email already exist. Please use different email-id.",
		type: "error",
	},

	error: {
		message: "wrong login or password",
		type: "error",
	},
};


export const loginOrRegisterUser = async (data: ILoginForm | IRegisterForm | FormikValues, resetForm: Function, setFormStatus: Function, setDisplayFormStatus: Function) => {
	try {
		if (data) {
			setFormStatus(formStatusProps.success)
			resetForm({})
		}
	} catch (error) {
		const response = error.response
			if (response.data === 'user already exist' && response.status === 400) {
				setFormStatus(formStatusProps.error)
			}
		
	}	finally {
		setDisplayFormStatus(true)
	}
}