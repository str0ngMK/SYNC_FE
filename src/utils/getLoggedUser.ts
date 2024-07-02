import axios, { AxiosResponse } from 'axios';
import config from 'config/config';

const getLoggedUser = async () => {
  const response = (await axios.get(`${config.backendUrl}/api/user/info`, {
    withCredentials: true,
  })) as AxiosResponse<{ value: { username: string } }, any>;
  const { username } = response.data.value;
  return username ? username : '';
};

export default getLoggedUser;
