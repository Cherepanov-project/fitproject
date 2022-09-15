import styled, { keyframes } from "styled-components"

export const Loss = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 15px;
`

export const StyledSpan = styled.span`
  font-weight: 400;
`

export const WeightLossGoalWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const ArcWrapper = styled.div`
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
const outerArcAnimation = (kg: number) => keyframes`
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
    animation: ${props => outerArcAnimation(props.kg)} 1s linear both;
    animation-delay: 1s;
  }
`
