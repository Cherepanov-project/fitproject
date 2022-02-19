import { useState } from "react";
import { CardContent } from "@mui/material";
import { FormikStepper } from "./FormikStepper";
import { IRegisterForm} from "../../../model/loginOrRegisterInterfaces/interfaces";
import { FormTextField } from "../../../common/user/FormTextField";
import { paused } from "../../../utils/paused";
import { validationRegister } from "../../../utils/validationShema";
import { RightSide } from "../userLoginOrRegisterStyle";
import FormikStep from "../../../common/user/FormikStep";
import { IFormStatus } from "../../../model/loginOrRegisterInterfaces/interfaces";
import { loginOrRegisterUser } from "../../../utils/loginOrRegisterUser";

export const RegisterForm: React.FC = () => {
	const [displayFormStatus, setDisplayFormStatus] = useState(false)
	const [formStatus, setFormStatus] = useState<IFormStatus>({
		message: '',
		type: '',
	})
	const [values, setValues] = useState<IRegisterForm>({
		userName: "",
		email: "",
		contactNumber: 0,
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
	});

	return (
		<RightSide>
			<CardContent sx={{ width: "80%", margin: "0 auto" }}>
				<FormikStepper
					onSubmit={async (data, actions) => {
						await paused(3000);
						
						loginOrRegisterUser(data, actions.resetForm, setFormStatus, setDisplayFormStatus)
							.then(() => {
								displayFormStatus || console.log(formStatus);
								setDisplayFormStatus(false)
								console.log('data sign in: ', data)
							})
						}
					}
					initialValues={{
						email: "",
						password: "",
						confirmPassword: "",
						userName: "",
						contactNumber: "",
						meal: '',
						exercises: '',
					}}
					
				>

					<FormikStep label="user Info" validationSchema={validationRegister}>
						<FormTextField placeholder="Enter Email" name="email" type="text" />
						<FormTextField placeholder="Create User name" name="userName" type="text" />
						<FormTextField placeholder="Contact number" name="contactNumber" type="number" />
						<FormTextField placeholder="Password" name="password" secrecy={true} />
						<FormTextField placeholder="Confirm Password" name="confirmPassword" secrecy={true} />
					</FormikStep>

					<FormikStep label="meal preferencies">
						<FormTextField placeholder="meal" name="meal" type="text" />
					</FormikStep>

					<FormikStep label="exercises">
						<FormTextField placeholder="exercises" name="exercises" type="text" />
					</FormikStep>

				</FormikStepper>
			</CardContent>
		</RightSide>
	);
};
