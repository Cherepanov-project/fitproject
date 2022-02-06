import styled from 'styled-components';
import {Formik, Form} from "formik";
import TextField from "./TextField";
import Image from "next/image";
import Link from "next/link";
import * as Yup from 'yup';


const FormAdminWrapper = styled.div`
   width: 380px;
   border-radius: 8px;
   background-color: #FFFFFF; 
   padding: 32px 40px;
   color: #9FA2B4;
   font-size: 14px;
`;

const DivCenter = styled.div`
   text-align: center;
   
`;

const DivDashboard = styled(DivCenter)`
   font-size: 19px;
   font-weight: bold;
`;

const FormH1 = styled.h1`
   font-size: 24px;
   margin: 32px 0 12px;
   font-weight: bold;
   text-align: center;
   color: #252733;
`;

const FormH2 = styled.h2`
   text-align: center;
   font-size: 14px;
   font-weight: normal;
   margin-bottom: 48px;
`;

const StyledButton = styled.button`
   font-size: 14px;
   width: 100%;
   margin-top: 24px;
   margin-bottom: 32px;
   padding: 15px 0;
   border-radius: 8px;
   background-color: #3751FF;
   border: 1px solid #3751FF;
   color: white;
   cursor: pointer;
   &:hover{
   border: 1px solid #3751FF;
   color: #3751FF;
   background-color: white;
   transition: 0.5s;
   }
`;

const FormA = styled.a`
   color: #3751FF;
   padding-left: 5px;
   cursor: pointer;
   &:hover{
   color: #252733;
   }
`;

const FormAdmin = () => {

    const validate = Yup.object({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').max(20,'Password must be at max 20 characters').required('Password is required'),
    });

    return (
        <FormAdminWrapper>
            <Formik
                initialValues={{
                email: '',
                password: ''
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
                        <FormH1>Log In to Admin Panel</FormH1>
                        <FormH2>Enter your email and password below</FormH2>
                        <Form>
                            <TextField placeholder="Email address" label='Email' name='email' type='email'/>
                            <TextField placeholder="Password" label='Password' name='password' type='password'/>
                            <StyledButton type='submit'>Log in</StyledButton>
                        </Form>
                        <DivCenter type='submit'>
                            Don’t have an account?
                            <Link href={`/admin/sign-up`}><FormA>Sign Up</FormA></Link>
                        </DivCenter>
                    </div>
                )}
            </Formik>
        </FormAdminWrapper>
    );
};

export default FormAdmin;