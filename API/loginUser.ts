import axios from 'axios';
import { ILoginForm, IRegisterForm } from '../model/loginOrRegisterInterfaces/interfaces';

export const loginUser = async (user: ILoginForm) => {
  const { data: res } = await axios.post('http://localhost:8082/user', { user });
  return res;
};

export const registerUser = async (user: IRegisterForm) => {
  const { data: res } = await axios.post('http://localhost:8082/register', { user });
  return res;
};
