import React, { useState } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import { paused } from '../../../utils/paused';
import { Button, CardContent, CircularProgress } from '@mui/material';
import { FormTextField } from '../../../common/user/FormTextField';
import { RightSide, Title2, ForgorPassword } from '../userLoginOrRegisterStyle';
import { RegOrLoginSocial } from '../RegOrLoginSocial';
import { IFormStatus } from '../../../model/loginOrRegisterInterfaces/interfaces';
import { loginOrRegisterUser } from '../../../utils/loginOrRegisterUser';

export const LoginForm: React.FC = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  });

  return (
    <Formik
      onSubmit={async (data, actions) => {
        //имитация отправки формы
        await paused(3000);
        await loginOrRegisterUser(data, actions.resetForm, setFormStatus, setDisplayFormStatus);

        console.log('data sign in: ', data);
      }}
      initialValues={{
        login: '',
        password: '',
      }}>
      {({ isSubmitting, handleSubmit }) => (
        <RightSide>
          <CardContent sx={{ width: '80%', margin: '0 auto' }}>
            <Title2>Sign in</Title2>
            <form onSubmit={handleSubmit}>
              <FormTextField placeholder="Enter email or user name" name="login" type="text" />
              <FormTextField placeholder="Password" name="password" secrecy={true} />
              <div>
                {
                  <Link href="#">
                    <ForgorPassword>Forgor password?</ForgorPassword>
                  </Link>
                }
              </div>
              <Button
                fullWidth
                sx={{ backgroundColor: '#6D63FF' }}
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                startIcon={isSubmitting ? <CircularProgress size="1.5rem" /> : null}>
                {isSubmitting ? '' : 'Login'}
              </Button>
            </form>
            <RegOrLoginSocial />
          </CardContent>
        </RightSide>
      )}
    </Formik>
  );
};
