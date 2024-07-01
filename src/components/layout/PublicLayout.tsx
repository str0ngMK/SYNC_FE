import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useLoggedInUserStore from '@libs/store/store';
import axios, { AxiosResponse } from 'axios';

const PublicLayout = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const { loggedInUser, setLoggedInUser } = useLoggedInUserStore();

  useEffect(() => {
    const getLoggedUser = async () => {
      try {
        const response = (await axios.get(
          'https://158.247.197.212:9090/api/user/info',
          { withCredentials: true },
        )) as AxiosResponse<{ value: { username: string } }, any>;
        const { username } = response.data.value;
        localStorage.setItem('loggedInUser', username);
        return username || '';
      } catch (error) {
        setFailedAuth(true);
        return '';
      }
    };
    getLoggedUser().then((username) => setLoggedInUser(username));
  }, []);

  if (!loggedInUser || failedAuth) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PublicLayout;
