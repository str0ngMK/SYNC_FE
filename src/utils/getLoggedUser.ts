import axios, { AxiosResponse } from 'axios';

const getLoggedUser = async () => {
  const response = (await axios.get(
    'https://158.247.197.212:9090/api/user/info',
    { withCredentials: true },
  )) as AxiosResponse<{ value: { username: string } }, any>;
  const { username } = response.data.value;
  return username ? username : '';
};

export default getLoggedUser;
