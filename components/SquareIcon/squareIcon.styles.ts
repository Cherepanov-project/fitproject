import styled from "styled-components"

import { IIconProps } from "./squareIcon.interface"

export const CustomIcon = styled.div<IIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81px;
  height: 74px;
  background: ${({ bgColor }) => bgColor};
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;

  @media (min-width: 2400px) {
    width: 91px;
    height: 84px;
  }
`
