import React, {useState} from 'react';
import {useMutation} from "react-query";
import {FormContainer} from "./formContainer";
import {Form, Formik} from "formik";
import Image from "next/image";
import TextField from "./TextField";
import Link from "next/link";
import Cookie from 'js-cookie';
import * as Yup from 'yup';
import Router from 'next/router'
import axios from "axios";
import {DivCenter, DivDashboard, FormA, FormH1, FormH2, StyledButton} from "./Form.styled";
import ApiService from "../../services/apiService";
import {data} from "browserslist";
import api from '../../services'

const apiService = new ApiService();

const SignUpForm = () => {

    const validate = Yup.object({
        username: Yup.string().min(3, 'Admin name must be at least 6 characters').max(20).required(),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must be at max 20 characters').required('Password is required'),
        repeat_password: Yup.string().oneOf([Yup.ref('password')], 'Passwords should match').required('Repeat password is required'),
    });

    const mutation = useMutation(async (item) => {
            const request = await api.auth.registration({user: item});
            return request;
        }
    );

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    repeat_password: ''

                }}
                validationSchema={validate}
                onSubmit={(values, {setFieldError}) => {
                    console.log(values);
                    // @ts-ignore
                    mutation.mutate({
                        username: values.username,
                        email: values.email,
                        password: values.password,
                        repeat_password: values.password,
                    });
                    if (mutation.error) {
                        setFieldError('username', 'Admin name already used')
                    }
                }}
            >
                {formik => (
                    <div>
                        <DivCenter>
                            <Image src='/sidebarIcons/logoApp.svg' width='48' height='48' alt='search'/>
                        </DivCenter>
                        <DivDashboard>Dashboard Kit</DivDashboard>
                        <FormH1>Sign up to Admin Panel</FormH1>
                        <FormH2>Enter your username,email and password below</FormH2>
                        <Form>
                            <TextField placeholder="Admin name" label='Admin name' name='username' type='text'/>
                            <TextField placeholder="Email address" label='Email' name='email' type='email'/>
                            <TextField placeholder="Password" label='Password' name='password' type='password'/>
                            <TextField placeholder="Password" label='Repeat password' name='repeat_password'
                                       type='password'/>
                            <StyledButton type='submit'>Create</StyledButton>
                        </Form>
                        <DivCenter>
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