import { Cookies } from 'react-cookie';

import axios, { AxiosError, isAxiosError } from 'axios';
import config from 'config/config';

const cookies = new Cookies(null, { path: '/' });

export const publicInstance = axios.create({
  baseURL: config.backendUrl,
});

export const requiredJwtTokeninstance = axios.create({
  baseURL: config.backendUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${cookies.get('JWT_TOKEN')}`,
  },
});

requiredJwtTokeninstance.interceptors.response.use(
  (response) => response,
  async (axiosError: AxiosError) => {
    const originalRequest = axiosError.config;

    if (
      isAxiosError<{ code: string }>(axiosError) &&
      axiosError.response &&
      originalRequest
    ) {
      const { data } = axiosError.response;
      if (data.code === 'U003') {
        try {
          await axios.get(`${config.backendUrl}/api/user/auth`, {
            withCredentials: true,
          });
          return axios(originalRequest);
        } catch (error) {
          if (isAxiosError<{ code: string }>(error) && error.response) {
            if (data.code === 'U003') {
              window.alert('토큰 유효기간 만료. 로그인 창으로 돌아갑니다.');
              window.location.href = '/login';
            }
          }
          Promise.reject(error);
        }
      }
    }
    return null;
  },
);
