import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import Cookies from 'js-cookie';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import Snackbar from '@mui/material/Snackbar';
import { paused } from '../../../utils/paused';
import { Button, CardContent, CircularProgress } from '@mui/material';
import { FormTextField } from '../../../common/user/FormTextField';
import { RightSide, Title2, ForgorPassword } from '../userLoginOrRegisterStyle';
import { RegOrLoginSocial } from '../RegOrLoginSocial';
import { IFormStatus } from '../../../model/loginOrRegisterInterfaces/interfaces';
import { loginOrRegisterUser } from '../../../utils/loginOrRegisterUser';
import { validationLoginUser } from '../../../utils/validationSchema';
import { loginUser } from '../../../API/loginUser';

export const LoginForm: React.FC = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  });

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const closeMessage = () => {
    setOpen(false);
  };

  const router = useRouter();

  // useEffect(() => {
  //   if (Cookies.get('userToken')){
  //     setTimeout(()=>{
  //       router.push('/user/statistics');
  //     },3000)
  //   }
  // }, [router]);

  return (
    <>
      <Formik
        validationSchema={validationLoginUser}
        onSubmit={async (data, actions) => {
          await paused(1000);
          await loginOrRegisterUser(data, actions.resetForm, setFormStatus, setDisplayFormStatus);
          try {
            const { res: token } = await loginUser(data);
            setMsg('You have been login')
            setOpen(true);
            Cookies.set('userToken', token, { expires: 2 });
            router.push('/user/statistics');
          } catch {
            setMsg('Error')
            setOpen(true);
          }
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
                      <ForgorPassword>Forgot password?</ForgorPassword>
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
      <Snackbar
        open={open}
        onClose={closeMessage}
        message={msg}
        key={nanoid()}
      />
    </>
  );
};
