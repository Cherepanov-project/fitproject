import Layout from "../../../common/user/UserLayout";
import Link from "next/link";
import { RegisterForm } from "./RegisterFormStep"
import {
	FlexWrapper,
	UserLoginOrRegister,
	Logo,
	Title,
	Title2,
	LeftSide,
	A,
	RegOrLoginIcon,
} from "../userLoginOrRegisterStyle";
import loginMan from '../../../common/images/loginMan.png';

export default function User() {
  return (
    <Layout title="Register User">
      <UserLoginOrRegister>
        <Logo>Your Logo</Logo>
        <FlexWrapper>
					<LeftSide>
						<Title>Register</Title>
						<Title2 >Lorem ipsum is simply</Title2>
						<div>If you already have an account </div>
						<div>You can <Link href="/user"><A >Login here !</A></Link></div>
						<RegOrLoginIcon width="50%" src={loginMan.src} ></RegOrLoginIcon>
					</LeftSide>
          <RegisterForm />
        </FlexWrapper>
      </UserLoginOrRegister>
    </Layout>
  );
}
