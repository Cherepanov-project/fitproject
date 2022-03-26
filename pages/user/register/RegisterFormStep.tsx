import { useState } from 'react';
import { CardContent } from '@mui/material';
import { FormikStepper } from './FormikStepper';
import { ILoginForm, IRegisterForm } from '../../../model/loginOrRegisterInterfaces/interfaces';
import { FormTextField } from '../../../common/user/FormTextField';
import { FormSelectField } from '../../../common/user/FormSelectField';
import { paused } from '../../../utils/paused';
import {
  validationUser,
  validationMeal,
  validationExercises,
} from '../../../utils/validationSchema';
import { RightSide } from '../userLoginOrRegisterStyle';
import FormikStep from '../../../common/user/FormikStep';
import { IFormStatus } from '../../../model/loginOrRegisterInterfaces/interfaces';
import { loginOrRegisterUser } from '../../../utils/loginOrRegisterUser';
import { redirectToLoginPage } from '../../../utils/redirect';

export const RegisterForm: React.FC = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState<boolean>(false);

  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  });

  const [values, setValues] = useState<IRegisterForm>({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    contactNumber: null,
    prohibitedProducts: '',
    wishProducts: '',
    goal: '',
    quantityMeals: '',
    typeOfProgramm: '',
    numberOfWorkouts: '',
    typeOfTrainings: '',
  });

  const selects = [
    { value: 'aaa', title: 'aaa' },
    { value: 'bbb', title: 'bbb' },
    { value: 'ccc', title: 'ccc' },
  ];

  return (
    <RightSide>
      <CardContent sx={{ width: '80%', margin: '0 auto' }}>
        <FormikStepper
          onSubmit={async (data: IRegisterForm, actions: { resetForm: Function }) => {
            await paused(3000);
            redirectToLoginPage('http://localhost:3000/user');
            setValues({ ...data });
            await loginOrRegisterUser(data, actions.resetForm, setFormStatus, setDisplayFormStatus);
            console.log('data sign in: ', data);
          }}
          initialValues={values}>
          <FormikStep label="userInfo" validationSchema={validationUser}>
            <FormTextField placeholder="Enter Email" name="email" type="text" />
            <FormTextField placeholder="Create User name" name="userName" type="text" />
            <FormTextField placeholder="Contact number" name="contactNumber" type="text" />
            <FormTextField placeholder="Password" name="password" secrecy={true} />
            <FormTextField placeholder="Confirm Password" name="confirmPassword" secrecy={true} />
          </FormikStep>

          <FormikStep label="mealPreferencies" validationSchema={validationMeal}>
            <FormTextField
              placeholder="Enter prohibited products"
              name="prohibitedProducts"
              type="text"
            />
            <FormTextField placeholder="Enter Wish products" name="wishProducts" type="text" />
            <FormSelectField placeholder="Choose Goal" name="goal" values={selects} />
            <FormTextField placeholder="Quantity meals a day" name="quantityMeals" type="text" />
          </FormikStep>

          <FormikStep label="exercises" validationSchema={validationExercises}>
            <FormSelectField
              placeholder="Choose type of programm"
              name="typeOfProgramm"
              values={selects}
            />
            <FormSelectField
              placeholder="Number of workouts per week"
              name="numberOfWorkouts"
              values={selects}
            />
            <FormSelectField
              placeholder="What type of trainings do you prefer"
              name="typeOfTrainings"
              values={selects}
            />
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </RightSide>
  );
};
