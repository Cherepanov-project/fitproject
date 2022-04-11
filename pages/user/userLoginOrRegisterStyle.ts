import styled from 'styled-components';

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
  border: ${(props) => (props.error ? '1px solid red' : 'none')};
  &:focus {
    outline-color: #a7a3ff;
  }
  &::placeholder {
    color: #a7a3ff;
  }
`;

export const InputSelect = styled.select<{ error: boolean }>`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #a7a3ff;
  background-color: #f0efff;
  font-size: 15px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '1px solid red' : 'none')};
  &:focus {
    outline-color: #a7a3ff;
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }
  &::placeholder {
    color: #a7a3ff;
  }

  line-height: 1.5em;
  padding: 0.8rem 1rem;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`;

export const SelectOption = styled.option`
  background-color: #f0efff;
  font-size: 15px;
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
  color: #b0b0b0;
  font-size: 13px;
`;

export const ContinueWithSocial = styled.div`
  margin: 2rem 0;
  text-align: center;
  color: #b0b0b0;
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
