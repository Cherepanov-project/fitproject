import Link from "next/link"

import Layout from "@/components/User/userLayout"
import loginMan from "@/common/images/loginMan.png"
import { RegisterForm } from "@/components/Registration/RegisterFormStep"
import {
    FlexWrapper,
    UserLoginOrRegister,
    Logo,
    Title,
    Title2,
    LeftSide,
    AAA,
    RegOrLoginIcon,
} from "@/components/RegOrLoginSocial/regOrLoginSocial.styles"

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
                            <span>You can </span>
                            <Link href={"/user"} passHref>
                                <AAA>Login here !</AAA>
                            </Link>
                        </div>
                        <RegOrLoginIcon width="50%" src={loginMan.src} />
                    </LeftSide>
                    <RegisterForm />
                </FlexWrapper>
            </UserLoginOrRegister>
        </Layout>
    )
}

export default User
