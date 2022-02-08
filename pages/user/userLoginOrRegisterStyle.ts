import styled from "styled-components";

export const UserLoginOrRegister = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	max-height: 900px
`;

export const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin:1rem 5rem;
`;

export const Logo = styled.div`
	margin-left: 2rem;
	padding-top: 1.5rem;
`;

export const LeftSide = styled.div`
	background-color: tomato;						/* FIXME */
	padding: 10rem 0;
	min-width: 50%;
	color: black;
	font-size: 0.8rem;
`;

export const H1 = styled.h1`
font-size: 2.5rem;
margin: 0 0 0.2rem 0;
padding: 0
`;

export const H2 = styled.h2`
font-size: 1.75rem;
margin: 0 0 2rem 0;
padding: 0
`;

export const A = styled.a`
color: #4D47C3;
text-decorator: none;
`;

export const FormWrapper = styled.div`
	text-align: center;
	max-width: 540px;
	
	margin: 5rem auto;
	
`;

export const ErrorMessage = styled.div`
	color: darkRed														/* FIXME */
`;