import React, { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Formik } from 'formik';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
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

  type TransitionProps = Omit<SlideProps, 'direction'>;

  const TransitionUp = (props: TransitionProps) => {
    return <Slide {...props} direction="up" />;
  };

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] =
    React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);

  const openMessage = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const closeMessage = () => {
    setOpen(false);
  };

  return (
    <>
      <Formik
        validationSchema={validationLoginUser}
        onSubmit={async (data, actions) => {
          await paused(1000);
          await loginOrRegisterUser(data, actions.resetForm, setFormStatus, setDisplayFormStatus);
          // const { res: token } = await loginUser(data);
          setOpen(true);
          // openMessage(TransitionUp);
          // Cookies.set('userToken', token, { expires: 2 });
          // window.location.href = `${process.env.LOCAL_URL}/user/statistics`;
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
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ''}
      />
    </>
  );
};
