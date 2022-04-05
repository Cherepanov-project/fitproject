import axios from 'axios';
import { ILoginForm, IRegisterForm } from '../model/loginOrRegisterInterfaces/interfaces';

export const loginUser = async (user: ILoginForm) => {
  const { data: res } = await axios.post(process.env.API_LOGIN_USER,{ user });
  return res;
};

export const registerUser = async (user: IRegisterForm) => {
  const { data: res } = await axios.post(process.env.API_REGISTER_USER, { user });
  return res;
};
