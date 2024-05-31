import { rejects } from 'assert';
import axios, { AxiosError } from 'axios';

export const BASE_URL = 'https://158.247.197.212:9090';

export interface User {
  email: string;
  password: string;
  username: string;
}

export const signupAPI = ({ email, password, username }: User) => {
  return axios
    .post('/signup', {
      email,
      password,
      username,
    })
    .then((res) => res)
    .catch((error) => error);
};
