import Link from "next/link";
import { LeftSide, H1, H2, A } from "../userLoginOrRegisterStyle";

const UserRegisterLeftSide = () => {
	return (
		<>
			<LeftSide>
				<H1>Register</H1>
				<H2 >Lorem ipsum is simply</H2>
				<div>If you already have an account </div>
				<div>You can <Link href="/user/login"><A >Login here !</A></Link></div>
			</LeftSide>
		</>
	)
}

export default UserRegisterLeftSide;
