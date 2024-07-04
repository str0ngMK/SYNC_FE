import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useLoggedInUserStore from '@libs/store/store';
import axios, { AxiosResponse } from 'axios';
import config from 'config/config';

const PublicLayout = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const { loggedInUser, setLoggedInUser } = useLoggedInUserStore();

  useEffect(() => {
    const getLoggedUser = async () => {
      try {
        const response = (await axios.get(
          `${config.backendUrl}/api/user/info`,
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
