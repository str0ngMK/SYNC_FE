import { Cookies } from 'react-cookie';

import axios, { AxiosError, AxiosResponse } from 'axios';
import config from 'config/config';

export const BASE_URL = config.backendUrl;

export interface User {
  userId: string;
  password: string;
  username: string;
}

interface APIResponse {
  result: string;
  focus?: string;
  errorMessage?: string;
}

export const signupAPI = async ({
  userId,
  password,
  username,
}: User): Promise<APIResponse> => {
  try {
    await axios.post(`${config.backendUrl}/signup`, {
      userId,
      password,
      username,
      email: 'example@gmail.com',
    });
    return { result: 'OK', focus: '', errorMessage: '' };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      if (error.response.data.message === 'UserId is duplicated')
        return {
          result: 'OK',
          focus: 'userId',
          errorMessage: '입력된 아이디는 이미 가입된 상태입니다.',
        };
    }
    return { result: 'error', focus: '', errorMessage: '네트워크 에러' };
  }
};

export const loginAPI = async ({
  userId,
  password,
}: Omit<User, 'username'>): Promise<APIResponse> => {
  try {
    const response = await axios.post(
      `${config.backendUrl}/login`,
      {},
      {
        withCredentials: true,
        params: {
          id: userId,
          password,
        },
      },
    );
    const authHeaders: string | null = response.headers.authorization;
    if (authHeaders) {
      const token = authHeaders.split(' ')[1];
      console.log(token);
      const cookies = new Cookies(null, { path: '/' });
      cookies.set('JWT_TOKEN', token);
      return { result: 'OK', focus: '', errorMessage: '' };
    }
    return { result: 'OK', focus: '', errorMessage: '' };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      if (error.response.data.message === '아이디가 잘못되었습니다.')
        return {
          result: 'error',
          focus: 'userId',
          errorMessage: '입력하신 아이디가 옳지 않습니다.',
        };
    }
    return { result: 'error', focus: '', errorMessage: '네트워크 오류' };
  }
};

export const getLoggedUserAPI = async (): Promise<APIResponse> => {
  const response = (await axios.get(`${config.backendUrl}/api/user/my/info`, {
    withCredentials: true,
  })) as AxiosResponse<{ value: { username: string } }, any>;
  return { result: response.data.value.username, focus: '', errorMessage: '' };
};
