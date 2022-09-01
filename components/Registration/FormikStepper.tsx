import { useState } from "react"
import { Children, ReactElement } from "react"
import { nanoid } from "nanoid"
import { Formik, FormikConfig, Form } from "formik"
import { CircularProgress, Grid } from "@mui/material"

import {
  StyledStepper,
  StyledStepLabel,
  StyledButton,
} from "./FormikStepper.styles"

import RegOrLoginSocial from "../RegOrLoginSocial/regOrLoginSocial"
import {
  IFormikStepProps,
  IFormikStepperProps,
} from "@/models/loginOrRegisterInterfaces/interfaces"
import { FontOpenSans } from "@/utils/fonts/fontStyles"

export const FormikStepper = ({
  children,
  initialValues,
  onSubmit,
  registerSuccess,
}: IFormikStepperProps) => {
  const childrenArray = Children.toArray(
    children
  ) as ReactElement<IFormikStepProps>[]
  const [step, setStep] = useState<number>(0)
  const [completed, setCompleted] = useState<boolean>(false)
  const currentChild = childrenArray[step]

  function isLastStep() {
    return step === childrenArray.length - 1
  }

  return (
    <>
      <FontOpenSans />
      <Formik
        initialValues={initialValues}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            await onSubmit(values, helpers)
            setCompleted(true)
          } else {
            setStep(step => step + 1)
            helpers.setTouched({})
          }
        }}
      >
        {({ isSubmitting, handleChange }) => (
          <Form autoComplete="off" onChange={handleChange}>
            <StyledStepper activeStep={step}>
              {childrenArray.map((child, index) => (
                <StyledStepLabel activeStep={step} index={index} key={nanoid()}>
                  {child.props.label}
                </StyledStepLabel>
              ))}
            </StyledStepper>
            {currentChild}
            <Grid container spacing={2}>
              {step > 0 ? (
                <Grid item>
                  <StyledButton
                    disabled={isSubmitting || registerSuccess}
                    variant="contained"
                    onClick={() => setStep(step => step - 1)}
                  >
                    previous step
                  </StyledButton>
                </Grid>
              ) : null}
              <Grid item sx={{ marginLeft: "auto" }}>
                <StyledButton
                  startIcon={
                    isSubmitting ? <CircularProgress size="1.5rem" /> : null
                  }
                  disabled={isSubmitting || registerSuccess}
                  variant="contained"
                  type="submit"
                >
                  {isSubmitting
                    ? "loading"
                    : isLastStep()
                    ? "Create account"
                    : "next step"}
                </StyledButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <RegOrLoginSocial />
    </>
  )
}
