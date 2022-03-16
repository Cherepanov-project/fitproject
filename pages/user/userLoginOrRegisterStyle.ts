import styled from "styled-components";

export const UserLoginOrRegister = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  max-height: 900px;
	
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 5rem;
`;

export const Logo = styled.div`
  margin-left: 2rem;
  padding-top: 1.5rem;
`;

export const LeftSide = styled.div`
  padding: 6rem 0;
  width: 50%;
  color: black;
  font-size: 0.8rem;
`;

export const RightSide = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.2rem 0;
  padding: 0;
`;

export const Title2 = styled.h2`
  font-size: 1.75rem;
  margin: 0 0 2rem 0;
  padding: 0;
`;

export const A = styled.a`
  color: #4d47c3;
  text-decorator: none;
`;

export const FormWrapper = styled.div`
  text-align: center;
  max-width: 540px;
  margin: 5rem auto;
`;

export const ErrorMessage = styled.div`
  color: red;
  fontsize: 8px;
`;

export const Input = styled.input<{ error: boolean }>`
  padding: 0.8rem 1rem;
  background-color: #f0efff;
  font-size: 15px;
  border-radius: 5px;
  border: ${(props) => (props.error ? "1px solid red" : "none")};
		&:focus {
			outline-color: #a7a3ff;
		}
		&::placeholder {
			color: #a7a3ff;
		}
`;

export const RegOrLoginIcon = styled.img`
	position: relative;
	left: 50%;
	top: -25%;
	img: ${(props) => props.src};
`;

export const ForgorPassword = styled.div`
	margin: 1rem 0 2rem;
	text-align: end;
	text-decorator: none;
	color: #B0B0B0;
	font-size: 13px;
`;

export const ContinueWithSocial = styled.div`
	margin: 2rem 0;
	text-align: center;
	color: #B0B0B0;
	font-size: 13px;
`;

export const SocialLink = styled.div`
	display: flex; 
	justify-content: center;
	margin-top: 1rem;
`;

export const SocialImg = styled.img`
	img: ${(props) => props.src};
	margin: 0 0.5rem;
`;
