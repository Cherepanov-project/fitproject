import styled from 'styled-components';
import {Formik, Form} from "formik";
import TextField from "./TextField";
import Image from "next/image";
import Link from "next/link";
import * as Yup from 'yup';
import {FormContainer} from "./formContainer";
import {DivCenter, DivDashboard, FormA, FormH1, FormH2, StyledButton} from "./Form.styled";
import api from "../../services";
import useAuth from "../hooks/useAuth";
import {useRouter} from "next/router";
import Cookies from 'js-cookie';

const SingInForm = () => {

    const auth = useAuth();
    const router = useRouter();

    const validate = Yup.object({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must be at max 20 characters').required('Password is required'),
    });

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={async (values, {setFieldError}) => {
                    try {
                        const request = await api.auth.login({user: values});
                        console.log(request.data.user)
                        console.log(request.data.user.token)
                        // auth.setUser(request.data.user);
                        // auth.setToken(request.data.user.token);
                        Cookies.set('auth-token', request.data.user.token);
                        Cookies.set('user', JSON.stringify(request.data.user));
                        router.replace('/admin/overview');
                    } catch (e) {
                        if (e.response.status === 403) {
                            Object.keys(e.response.data.errors).forEach((key)=>{
                                setFieldError('password',key+' ' + e.response.data.errors[key])
                            })
                        }
                    }
                }}

            >
                {formik => (
                    <div>
                        <DivCenter>
                            <Image src='/sidebarIcons/logoApp.svg' width='48' height='48' alt='search'/>
                        </DivCenter>
                        <DivDashboard>Dashboard Kit</DivDashboard>
                        <FormH1>Log In to Admin Panel</FormH1>
                        <FormH2>Enter your email and password below</FormH2>
                        <Form>
                            <TextField placeholder="Email address" label='Email' name='email' type='email'/>
                            <TextField placeholder="Password" label='Password' name='password' type='password'/>
                            <StyledButton type='submit'>Log in</StyledButton>
                        </Form>
                        <DivCenter type='submit'>
                            Don’t have an account?
                            <Link href={`/admin/sign-up`}><FormA href={`/admin/sign-up`}>Sign Up</FormA></Link>
                        </DivCenter>
                    </div>
                )}
            </Formik>
        </FormContainer>
    );
};

export default SingInForm;