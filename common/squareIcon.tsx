import styled from "styled-components";

interface IcoProps {
  bgColor: string;
  bgImg: string;
}

const createIco = (color: string, img: { src: string }) => {
  return <Ico bgColor={color} bgImg={img.src}></Ico>;
};

export default createIco;

const Ico = styled.div<IcoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81px;
  height: 74px;
  background: ${({ bgColor }) => bgColor};
  background-image: url(${({ bgImg }) => bgImg});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
`;
