import axios, { AxiosError, isAxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://158.247.197.212:9090',
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error: AxiosError) {
    const originalRequest = error.config;

    if (
      isAxiosError<{ code: string }>(error) &&
      error.response &&
      originalRequest
    ) {
      const { code } = error.response?.data;
      if (code === 'U003') {
        try {
          await axios.get('https://158.247.197.212:9090/api/user/auth', {
            withCredentials: true,
          });
          return axios(originalRequest);
        } catch (error) {
          if (isAxiosError<{ code: string }>(error) && error.response) {
            const { code } = error.response?.data;
            if (code === 'U003') {
              window.alert('토큰 유효기간 만료. 로그인 창으로 돌아갑니다.');
              window.location.href = '/login';
            }
          }
          Promise.reject(error);
        }
      }
    }
  }
);

export default instance;
