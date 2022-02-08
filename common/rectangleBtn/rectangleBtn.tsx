import { RectangleBtn, TextWrapper } from "./rectangleBtnStyles";
const createRectangleBtn = (text: string, bg: string, ico: JSX.Element) => {
  return (
    <RectangleBtn bg={bg}>
      {ico}
      <TextWrapper>{text}</TextWrapper>
    </RectangleBtn>
  );
};

export default createRectangleBtn;

