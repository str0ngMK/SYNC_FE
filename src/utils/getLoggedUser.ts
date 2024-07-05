import { publicInstance } from '@libs/axios/axios';
import { AxiosResponse } from 'axios';

const getLoggedUser = async () => {
  const response = (await publicInstance.get(`/api/user/info`, {
    withCredentials: true,
  })) as AxiosResponse<{ value: { username: string } }, any>;
  const { username } = response.data.value;
  return username ? username : '';
};

export default getLoggedUser;
