import Link from "next/link"

import loginMan from "../../common/images/loginMan.png"
import Layout from "../../components/User/userLayout"
import { RegOrLoginIcon } from "../../components/RegOrLoginSocial/regOrLoginSocial.styles"
import { Index } from "./login"
import {
    UserLoginOrRegister,
    FlexWrapper,
    Logo,
    LeftSide,
    AAA,
    Title,
    Title2,
} from "../../components/RegOrLoginSocial/regOrLoginSocial.styles"

const User = () => {
    return (
        <Layout title="Login User">
            <UserLoginOrRegister>
                <Logo>Your Logo</Logo>
                <FlexWrapper>
                    <LeftSide>
                        <Title>Sign in to</Title>
                        <Title2>Lorem ipsum is simply</Title2>
                        <div>If you don’t have an account register</div>
                        <div>
                            <span>You can</span>

                            <Link href={"/user/register"} passHref>
                                <AAA> Register here!</AAA>
                            </Link>
                        </div>
                        <RegOrLoginIcon width="50%" src={loginMan.src} />
                    </LeftSide>
                    <Index />
                </FlexWrapper>
            </UserLoginOrRegister>
        </Layout>
    )
}

export default User
