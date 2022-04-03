import styled from "styled-components";

interface BtnProps {
    bg: string;
}  

export const RectangleButton = styled.button<BtnProps>`
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

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;