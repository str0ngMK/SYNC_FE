import { rejects } from 'assert';
import axios, { AxiosError } from 'axios';
import config from 'config/config';

export const BASE_URL = config.backendUrl;

export interface User {
  userId: string;
  password: string;
  username: string;
}

export const signupAPI = ({ userId, password, username }: User) => {
  return axios
    .post('/signup', {
      userId,
      password,
      username,
    })
    .then((res) => res)
    .catch((error) => error);
};
