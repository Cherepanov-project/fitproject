import styled from "styled-components";

interface BtnProps {
  bg: string;
}

const createRectangleBtn = (text: string, bg: string, ico: JSX.Element) => {
  return (
    <RectangleBtn bg={bg}>
      {ico}
      <TexWrapper>{text}</TexWrapper>
    </RectangleBtn>
  );
};

export default createRectangleBtn;

const RectangleBtn = styled.button<BtnProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  width: 277px;
  height: 110px;
  color: #ffffff;
  background: ${({ bg }) => bg};
  border: none;
  border-radius: 40px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const TexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;
