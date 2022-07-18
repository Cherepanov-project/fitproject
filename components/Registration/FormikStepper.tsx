import { useState } from "react"
import { Children, ReactElement } from "react"
import { nanoid } from "nanoid"
import { Formik, FormikConfig, Form } from "formik"
import { Button, CircularProgress, Grid, StepLabel, Stepper } from "@mui/material"

import RegOrLoginSocial from "../RegOrLoginSocial/regOrLoginSocial"
import { IFormikStepProps, IFormikStepperProps } from "@/models/loginOrRegisterInterfaces/interfaces"
import {regStep} from "@/constants/registration";

export const FormikStepper = ({ children, initialValues, onSubmit, registerSuccess }: IFormikStepperProps) => {
    const childrenArray = Children.toArray(children) as ReactElement<IFormikStepProps>[]
    const [step, setStep] = useState<number>(0)
    const [completed, setCompleted] = useState<boolean>(false)
    const currentChild = childrenArray[step]

    function isLastStep() {
        return step === childrenArray.length - 1
    }

    return (
        <>
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
                        <Stepper sx={{ margin: "-10px" }} activeStep={step}>
                            {childrenArray.map((child, index) => (
                                <StepLabel
                                    sx={regStep(step, index)}
                                    key={nanoid()}
                                >
                                    {child.props.label}
                                </StepLabel>
                            ))}
                        </Stepper>
                        {currentChild}
                        <Grid container spacing={2}>
                            {step > 0 ? (
                                <Grid item>
                                    <Button
                                        sx={{ backgroundColor: "#B0BAC9" }}
                                        disabled={
                                            isSubmitting || registerSuccess
                                        }
                                        variant="contained"
                                        onClick={() =>
                                            setStep(step => step - 1)
                                        }
                                    >
                                        previous step
                                    </Button>
                                </Grid>
                            ) : null}
                            <Grid item sx={{ marginLeft: "auto" }}>
                                <Button
                                    sx={{ backgroundColor: "#6D63FF" }}
                                    startIcon={
                                        isSubmitting ? (
                                            <CircularProgress size="1.5rem" />
                                        ) : null
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
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
            <RegOrLoginSocial />
        </>
    )
}
