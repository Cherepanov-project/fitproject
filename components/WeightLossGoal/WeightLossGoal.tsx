import React from "react"
import {
  WeightLossWrapper,
  InnerArc,
  OuterArc,
  Needle,
} from "./WeightLossGoal.styles"
import needleImg from "@/common/images/layoutUser/userbarIcons/needle.svg"

interface IWeightLossProps {
  kg: number
}

export const WeightLossGoal: React.FC<IWeightLossProps> = ({ kg = 0 }) => {
  if (kg > 8) {
    kg = 8
  }
  return (
    <WeightLossWrapper>
      <InnerArc>
        <g transform="rotate(-159 100 100)">
          <circle
            className="path"
            width="200"
            height="200"
            cx="100"
            cy="100"
            r="70"
            strokeWidth="46.5"
            fill="none"
          />
        </g>
      </InnerArc>
      <OuterArc kg={kg}>
        <g transform="rotate(-159 100 100)">
          <circle
            className="path"
            width="200"
            height="200"
            cx="100"
            cy="100"
            r="70"
            strokeWidth="46.5"
            fill="none"
          />
        </g>
      </OuterArc>
      <Needle kg={kg} src={needleImg.src} />
    </WeightLossWrapper>
  )
}
