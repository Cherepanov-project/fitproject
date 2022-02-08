import { Formik } from "formik";
import React, { MouseEventHandler } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from 'yup';

import { FormWrapper, ErrorMessage } from "../userLoginOrRegisterStyle";


interface IRegisterForm {
	userName?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	age?: number;
	sex?: string;
	contactNumber?: number;
}

interface IFormStatus {
	message: string;
	type: string;
	showPassword?: boolean;
}

interface IFormStatusProps {
	[key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
	success: {
		message: "You have successfully registered Your account",
		type: "success",
		showPassword: false,
	},

	duplicate: {
		message: "Email already exist. Please use different email.",
		type: "error",
	},

	/* error: {
		message: "wrong login or password",
		type: "error",
		
	}, */
};


export const RegisterForm: React.FC = () => {
	const [displayFormStatus, setDisplayFormStatus] = React.useState(false)
	const [formStatus, setFormStatus] = React.useState<IFormStatus>({
		message: '',
		type: '',
		showPassword: false,
	})
	const [values, setValues] = React.useState<IRegisterForm>({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (prop: keyof MouseEventHandler & IFormStatus) => (
		event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleClickShowPassword = () => {
		setFormStatus({
			...formStatus,
			showPassword: !formStatus.showPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};
	
	const registerUser = async (data: IRegisterForm, resetForm: Function) => {
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
		} finally {
			setDisplayFormStatus(true)
		}
	}

	return (
		<Formik
			onSubmit={(data) => console.log(data)}      /* FIXME */
			initialValues={{
				email: "",
				userName: "",
				password: "",
				confirmPassword: "",
			}}
			validationSchema={Yup.object().shape({
				email: Yup.string().email().required('Enter valid email'),
				userName: Yup.string().min(5, 'Must be 5 characters or less').required('Required'),
				password: Yup.string()
					.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{5,20}\S$/,
					'Password must be more than 5 characters and not exceed 20. Must contain one uppercase, one lowercase, one special character and no spaces'
					)
					.required('Required'),
				confirmPassword: Yup.string().required('Required').test(
					'password-match',
					'Password must match',
					function (values) {
						return this.parent.password === values
					}
				)
			})}
		>
			{({values , touched, errors, handleSubmit, handleBlur, handleChange}) => (
				<form onSubmit={handleSubmit} >
					<FormWrapper >
						<FormControl variant="outlined" >
							<InputLabel>Enter email</InputLabel>
							<OutlinedInput
								id="email"
								type="email"
								value={values.email}
								label="email"
								error={errors.email && touched.email ? true : false}
								onChange={handleChange("email")}
								onBlur={handleBlur}
							/>
							{errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null} 
						</FormControl>
						<FormControl  variant="outlined" >
							<InputLabel>Create User name</InputLabel>
							<OutlinedInput
								id="userName"
								type="text"
								value={values.userName}
								label="userName"
								error={errors.userName && touched.userName ? true : false}
								onChange={handleChange("userName")}
								onBlur={handleBlur}
							/>
							{errors.userName ? <ErrorMessage>{errors.userName}</ErrorMessage> : null} 
						</FormControl>
						<FormControl  variant="outlined">
						<InputLabel >Password</InputLabel>
						<OutlinedInput
							id="password"
							type={formStatus.showPassword ? 'text' : 'password'}
							value={values.password}
								onChange={handleChange('password')}
								endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{formStatus.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
								label="Password"
							/>
							{errors.password ? <ErrorMessage>{errors.password}</ErrorMessage> : null}
						</FormControl>
						<FormControl  variant="outlined">
							<InputLabel >Confirm password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={formStatus.showPassword ? 'text' : 'password'}
								value={values.confirmPassword}
								onChange={handleChange('confirmPassword')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{formStatus.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="confirmPassword"
							/>
							{errors.confirmPassword ? <ErrorMessage>{errors.confirmPassword}</ErrorMessage> : null}
						</FormControl>
					</FormWrapper>
				</form>
			)}
		</Formik>
	);
}
