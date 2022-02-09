import React from 'react';
import {useMutation} from "react-query";
import {FormContainer} from "./formContainer";
import {Form, Formik} from "formik";
import Image from "next/image";
import TextField from "./TextField";
import Link from "next/link";
import * as Yup from 'yup';
import axios from "axios";
import {DivCenter, DivDashboard, FormA, FormH1, FormH2, StyledButton} from "./Form.styled";
import ApiService from "../../react-query/apiService";
import {data} from "browserslist";

const apiService = new ApiService();

const SignUpForm = () => {
    const validate = Yup.object({
        username: Yup.string().min(3, 'Admin name must be at least 6 characters').max(20).required(),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must be at max 20 characters').required('Password is required'),
        repeat_password: Yup.string().oneOf([Yup.ref('password')], 'Passwords should match'),
    });

    // const { data, error, isLoading, isError } = useQuery(
    //     'sign-up',
    //     async ()=> apiService.getResourcesTemplateJson(`articles?limit=5&offset=${(2) * 5}`, 'GET',undefined))

    const mutation = useMutation(async(item) => {
            console.log(data);
            // apiService.getResourcesTemplateJson('users', 'POST', {user: item})
        axios.post("https://api.instantwebtools.net/v1/passenger/", {user: item})
        }
    );

    if (mutation.isLoading) {
        return <p>Loading...</p>
    }
    if (mutation.isSuccess) console.log(mutation);
    // if (mutation.isError) {
    //     return <p>{error}</p>
    // }

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',

                }}
                validationSchema={validate}
                onSubmit={values => {
                    console.log(values);
                    // @ts-ignore
                    mutation.mutate({
                        username: values.username,
                        email: values.email,
                        password: values.password,
                    });
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