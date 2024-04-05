import { rejects } from 'assert';
import axios, { AxiosError } from 'axios';

export const BASE_URL = 'https://158.247.197.212:9090';

export interface User {
  userId: string;
  password: string;
  email: string;
  username: string;
  sex: 'MAN' | 'WOMAN';
  nickname?: string;
  city?: string;
  district?: string;
  roadAddress?: string;
}

export const signupAPI = ({
  userId,
  password,
  email,
  username,
  nickname,
  sex,
  city,
  district,
  roadAddress,
}: User) => {
  return axios
    .post('/signup', {
      userId,
      password,
      email,
      username,
      nickname,
      sex,
      city,
      district,
      roadAddress,
    })
    .then((res) => res)
    .catch((error) => error);
};
