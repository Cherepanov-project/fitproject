import Layout from "../../common/user/UserLayout";
import Link from "next/link";
import { LoginForm } from './login/loginForm';
import {
	UserLoginOrRegister,
	FlexWrapper,
	Logo,
	LeftSide,
	A,
	Title,
	Title2,
} from "./userLoginOrRegisterStyle";
import { RegOrLoginIcon } from "./userLoginOrRegisterStyle";
import loginMan from '../../common/images/loginMan.png';

export default function User() {
  return (
		<Layout title="Login User">	
      <UserLoginOrRegister>
        <Logo>Your Logo</Logo>
        <FlexWrapper>
					<LeftSide>
						<Title>Sign in to</Title>
						<Title2 >Lorem ipsum is simply</Title2>
						<div>If you don’t have an account register</div>
						<div>You can <Link href="/user/register" ><A >Register here!</A></Link></div>
						<RegOrLoginIcon width="50%" src={loginMan.src} ></RegOrLoginIcon>
					</LeftSide>
          <LoginForm />
        </FlexWrapper>
      </UserLoginOrRegister>
    </Layout>
  );
}