import React from 'react';
import {FormContainer} from "./formContainer";
import {Form, Formik} from "formik";
import Image from "next/image";
import TextField from "./TextField";
import Link from "next/link";
import styled from 'styled-components';
import * as Yup from 'yup';
import {DivCenter,DivDashboard,FormA,FormH1,FormH2,StyledButton} from "./Form.styled";

const SignUpForm = () => {
    const validate = Yup.object({
        admin_name: Yup.string().min(3,'Admin name must be at least 6 characters').max(20).required(),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').max(20,'Password must be at max 20 characters').required('Password is required'),
        repeat_password: Yup.string().oneOf([Yup.ref('password')], 'Passwords should match'),
    });

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    admin_name:'',
                    email: '',
                    password: '',
                    repeat_password: '',

                }}
                validationSchema={validate}
            >
                {formik => (
                    <div>
                        {console.log(formik.values)}
                        <DivCenter>
                            <Image src='/sidebarIcons/logoApp.svg' width='48' height='48' alt='search'/>
                        </DivCenter>
                        <DivDashboard>Dashboard Kit</DivDashboard>
                        <FormH1>Sign up to Admin Panel</FormH1>
                        <FormH2>Enter your username,email and password below</FormH2>
                        <Form>
                            <TextField placeholder="Admin name" label='Admin name' name='admin_name' type='text'/>
                            <TextField placeholder="Email address" label='Email' name='email' type='email'/>
                            <TextField placeholder="Password" label='Password' name='password' type='password'/>
                            <TextField placeholder="Password" label='Repeat password' name='repeat_password' type='password'/>
                            <StyledButton type='submit'>Create</StyledButton>
                        </Form>
                        <DivCenter type='submit'>
                            Already have an account?
                            <Link href={`/admin`}><FormA>Sign in</FormA></Link>
                        </DivCenter>
                    </div>
                )}
            </Formik>
        </FormContainer>
    );
};

export default SignUpForm;