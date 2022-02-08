import { RegisterForm } from "./RegisterForm"
import UserRegisterLeftSide from './UserRegisterLeftSide';
import { FlexWrapper, UserLoginOrRegister, Logo } from "../userLoginOrRegisterStyle";

const UserRegister = () => (
	<>
		<UserLoginOrRegister>
			<Logo>Your Logo</Logo>
			<FlexWrapper>
				<UserRegisterLeftSide />
				<RegisterForm />
			</FlexWrapper>
		</UserLoginOrRegister>

		</>
	
)

export default UserRegister;
