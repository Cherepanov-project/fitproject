import { FormikConfig, FormikValues } from 'formik';

export interface IRegisterForm {
  user: {
    userName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword: string;
    age?: number;
    sex?: string;
    contactNumber?: number;
  },
  meal: {
    prohibitedProducts: string;
    wishProducts: string;
    goal: string;
    quantityMeals:string;
  },
  exsersises: {
    typeOfProgramm: string;
    tumberOfWorkouts: string;
    typeOfTrainings: string;
  }
}

export interface ILoginForm {
  login: string;
  password: string;
}

export interface IFormStatus {
  message: string;
  type: string;
  showPassword?: boolean;
}

export interface IFormStatusProps {
  [key: string]: IFormStatus;
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export interface IInputForm {
  placeholder: string;
  name: string;
  type?: string;
  secrecy?: boolean;
}

export interface ISelectForm {
  placeholder: string;
  name: string;
}

export interface IFormikStepper {
  children: FormikStepProps;
  initialValues: IRegisterForm;
  onSubmit: Function;
}
