import { publicInstance } from '@libs/axios/axios';
import config from 'config/config';

export const BASE_URL = config.backendUrl;

export interface User {
  userId: string;
  password: string;
  username: string;
}

export const signupAPI = async ({ userId, password, username }: User) => {
  return publicInstance
    .post('/signup', {
      userId,
      password,
      username,
    })
    .then((res) => res)
    .catch((error) => error);
};
