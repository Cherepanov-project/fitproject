import styled, { keyframes } from "styled-components"

export const WeightLossWrapper = styled.div`
  height: 130px;
  width: 220px;
  position: relative;
  overflow: hidden;
  margin-bottom: 3px;
`

const rotate = (kg: number) => keyframes`
from {
    transform: rotate(-64.5deg);
}
 to {
    transform: rotate(${kg * 16.2 - 64.5}deg);
}
`

export const Needle = styled.img<{ kg: number }>`
  position: absolute;
  bottom: 1%;
  transform-origin: bottom;
  animation: ${props => rotate(props.kg)} 1s linear both;
`
export const InnerArc = styled.svg`
  width: 186px;
  bottom:-32%;
    left: 7%;
  position: absolute;
  & .path {
    stroke: #E6E6E6;
    stroke-dasharray: 168.5, 500;
    stroke-dashoffset: 0;
`
const outerAnimation = (kg: number) => keyframes`
from {
  stroke-dashoffset: 168.5;
}
to {
  stroke-dashoffset: ${168.5 - kg * 21};
}
`

export const OuterArc = styled.svg<{ kg: number }>`
  position: absolute;
  bottom: -32%;
  left: 7%;
  & .path {
    stroke: #554ce1;
    stroke-dasharray: 168.5, 500;
    stroke-dashoffset: 0;
    animation: ${props => outerAnimation(props.kg)} 1s linear both;
    animation-delay: 1s;
  }
`
