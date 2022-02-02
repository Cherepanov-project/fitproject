import styled from 'styled-components';

const UserWrapper = styled.div`
	max-width: 1440px;
	background-color: blue /* #FFFFFF */;				/* FIXME */
	padding 1rem;
	margin: 0 auto;
`;

const UserLoginOrRegisterWrapper = styled.div`
	background-color: red;											/* FIXME */
	display: flex;
	margin:1rem 5rem;
`;

const UserLoginOrRegisterLeftSide = styled.div`
	background-color: tomato;
	padding: 10rem 0;
	min-width: 50%;
	color: black;
	font-size: 0.8rem;
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	margin: 0 0 0.2rem 0;
	padding: 0
`;

const H2 = styled.h2`
	font-size: 1.75rem;
	margin: 0 0 2rem 0;
	padding: 0
`;

const A = styled.a`
	color: #4D47C3;
	text-decorator: none;
`;



const UserLogin = () => (
	<UserWrapper>
		<div>Your Logo</div>

		<UserLoginOrRegisterWrapper>
			<UserLoginOrRegisterLeftSide>
				<H1>Sign in to</H1>
				<H2 >Lorem ipsum is simply</H2>
				<div>If you don’t have an account register</div>
				<div>You can <A>Register here!</A></div>
			</UserLoginOrRegisterLeftSide>
			<div className="forms-side">
				<div >Forms...</div>
			</div>
		</UserLoginOrRegisterWrapper>
	</UserWrapper>
)

export default UserLogin;
