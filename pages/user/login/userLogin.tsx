import { LoginForm } from './loginForm';
import UserLoginLeftSide from './UserLoginLeftSide';
import { UserLoginOrRegister, FlexWrapper, Logo } from "../userLoginOrRegisterStyle";

const UserLogin = () => (
	
		<UserLoginOrRegister >
			<Logo>Your Logo</Logo>
			<FlexWrapper >
				< UserLoginLeftSide />
				<LoginForm /> 
			</FlexWrapper>
		</UserLoginOrRegister>	
)

export default UserLogin;
