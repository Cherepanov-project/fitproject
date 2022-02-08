import Link from "next/link"
import { LeftSide, H1, H2, A } from "../userLoginOrRegisterStyle"

const UserLoginLeftSide = () => {
	return (
		<>
			<LeftSide>
				<H1>Sign in to</H1>
				<H2 >Lorem ipsum is simply</H2>
				<div>If you don’t have an account register</div>
				<div>You can <Link href="/user/register" ><A >Register here!</A></Link></div>				
			</LeftSide>
		</>
	)
}

export default UserLoginLeftSide