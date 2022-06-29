import Link from "next/link"

import Layout from "../../../components/User/UserLayout"
import loginMan from "../../../common/images/loginMan.png"

import {
    FlexWrapper,
    UserLoginOrRegister,
    Logo,
    Title,
    Title2,
    LeftSide,
    A,
    RegOrLoginIcon,
} from "../userLoginOrRegisterStyle"

import { RegisterForm } from "./RegisterFormStep"

const User = () => {
    return (
        <Layout title="Register User">
            <UserLoginOrRegister>
                <Logo>Your Logo</Logo>
                <FlexWrapper>
                    <LeftSide>
                        <Title>Register</Title>
                        <Title2>Lorem ipsum is simply</Title2>
                        <div>If you already have an account </div>
                        <div>
                            You can
                            <Link href="/user" passHref>
                                <A>Login here !</A>
                            </Link>
                        </div>
                        <RegOrLoginIcon
                            width="50%"
                            src={loginMan.src}
                        ></RegOrLoginIcon>
                    </LeftSide>
                    <RegisterForm />
                </FlexWrapper>
            </UserLoginOrRegister>
        </Layout>
    )
}

export default User
