import * as Yup from 'yup';

export const validationRegister = Yup.object().shape({
	/* Email */
	email: Yup.string().email('Enter valid email').required('Required'),
	
	/* User Name */
	userName: Yup.string().min(5, 'User name must be 5 characters or less').required('Required'),
	
	/* Password */
	password: Yup.string()
		.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{5,20}\S$/,
		'Password must be more than 5 characters and not exceed 20. Must contain one uppercase, one lowercase, one special character and no spaces'
		)
		.required('Required'),
	
	/* ConfirmPassword */
	confirmPassword: Yup.string().required('Required').test(
		'password-match',
		'Password must match',
		function (values) {
			return this.parent.password === values
		}
	),

	/* Contact numebr */
		contactNumber: Yup.string()
		.matches(/^((\+?[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{2,4}[ -]?[0-9]{2,4}$/,
			'Phone number is not valid')
		.required('Required'),

})


