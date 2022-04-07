import { useState } from 'react';
import { CardContent } from '@mui/material';
import { FormikStepper } from './FormikStepper';
import {  IRegisterForm, IFormStatus  } from '../../../model/loginOrRegisterInterfaces/interfaces';
import { FormTextField } from '../../../common/user/FormTextField';
import { FormSelectField } from '../../../common/user/FormSelectField';
import { paused } from '../../../utils/paused';
import { validationUser, validationMeal, validationExercises} from '../../../utils/validationSchema';
import { RightSide } from '../userLoginOrRegisterStyle';
import FormikStep from '../../../common/user/FormikStep';
import { loginOrRegisterUser } from '../../../utils/loginOrRegisterUser';
import { redirectToLoginPage } from '../../../utils/redirect';
import { nanoid } from 'nanoid';

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

  const userInfo = [
    {
      placeholder: 'Enter Email',
      name: 'email',
      type: 'text',
      secrecy: false
    },
    {
      placeholder: 'Create User name',
      name: 'userName',
      type: 'text',
      secrecy: false
    },
    {
      placeholder: 'Contact number',
      name: 'contactNumber',
      type: 'text',
      secrecy: false
    },
    {
      placeholder: 'Password',
      name: 'password',
      type: 'password',
      secrecy: true
    },
    {
      placeholder: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
      secrecy: true
    }
  ];

  const exercises = [
    {
      placeholder: 'Choose type of programm',
      name: 'typeOfProgramm',
      values: [
        { value: 'aaa', title: 'aaa' },
        { value: 'bbb', title: 'bbb' },
        { value: 'ccc', title: 'ccc' },
      ]
    },
    {
      placeholder: 'Number of workouts per week',
      name: 'numberOfWorkouts',
      values: [
        { value: 'ddd', title: 'ddd' },
        { value: 'eee', title: 'eee' },
        { value: 'fff', title: 'fff' },
      ]
    },
    {
      placeholder: '',
      name: 'typeOfTrainings',
      values: [
        { value: 'ggg', title: 'ggg' },
        { value: 'hhh', title: 'hhh' },
        { value: 'iii', title: 'iii' },
      ]
    },
  ];

  const mealPreferenciesSelect = [
    { value: 'jjj', title: 'jjj' },
    { value: 'kkk', title: 'kkk' },
    { value: 'lll', title: 'lll' },
  ]

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
            {
              userInfo.map((field) => {
                return <FormTextField key={nanoid()} placeholder={field.placeholder} name={field.name} type={field.type} secrecy={field.secrecy} />
              })
            }
          </FormikStep>

          <FormikStep label="mealPreferencies" validationSchema={validationMeal}>
            <FormTextField placeholder="Enter prohibited products" name="prohibitedProducts" type="text"/>
            <FormTextField placeholder="Enter Wish products" name="wishProducts" type="text" />
            <FormSelectField placeholder="Choose Goal" name="goal" values={mealPreferenciesSelect} />
            <FormTextField placeholder="Quantity meals a day" name="quantityMeals" type="text" />
          </FormikStep>

          <FormikStep label="exercises" validationSchema={validationExercises}>
            {
              exercises.map((field)=>{
                return <FormSelectField key={nanoid()} placeholder={field.placeholder} name={field.name} values={field.values}/>
              })
            }
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </RightSide>
  );
};
