import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useLoggedInUserStore from '@libs/store/store';
import { AxiosResponse } from 'axios';
import { publicInstance } from '@libs/axios/axios';

const PublicLayout = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const { loggedInUser, setLoggedInUser } = useLoggedInUserStore();

  useEffect(() => {
    const getLoggedUser = async () => {
      try {
        const response = (await publicInstance.get(
          `/api/user/my/info`,
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
