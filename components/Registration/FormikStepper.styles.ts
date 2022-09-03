import {
  Button,
  CircularProgress,
  Grid,
  StepLabel,
  Stepper,
} from "@mui/material"

import { IStepLabelProps } from "@/models/loginOrRegisterInterfaces/interfaces"
import styled from "styled-components"

export const StyledStepper = styled(Stepper)`
  &:nth-child(2) {
    width: 186px;
  }
`
export const StyledStepLabel = styled(StepLabel)<IStepLabelProps>`
  text-transform: uppercase;
  margin: 0 0.8rem 1.8rem;
  width: 112px;
  height: 48px;
  text-align: center;
  border-radius: 5px;
  border: solid 2px #c9cfda;
  font: ${({ activeStep, index }) =>
    activeStep === index
      ? "#51AD78"
      : activeStep > index
      ? "#56CCF2"
      : "#C9CFDA"};

  border-color: ${({ activeStep, index }) =>
    activeStep === index
      ? "#51AD78"
      : activeStep > index
      ? "#56CCF2"
      : "#B0BAC9"};

  span {
    font-family: Open Sans;
    font-weight: 400;
    color: ${({ activeStep, index }) =>
      activeStep === index
        ? "#51AD78"
        : activeStep > index
        ? "#56CCF2"
        : "#B0BAC9"};
  }
`
export const StyledButton = styled(Button)`
  background-color: #6d63ff;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 40px;
  width: 154px;
  height: 48px;
`
