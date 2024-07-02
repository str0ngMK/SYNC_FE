import axios, { AxiosError, isAxiosError } from 'axios';
import config from 'config/config';

const instance = axios.create({
  baseURL: config.backendUrl,
  withCredentials: true,
});

instance.interceptors.response.use(
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

export default instance;
