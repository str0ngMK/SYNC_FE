import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useLoggedInUserStore } from '@libs/store';
import { getLoggedUserAPI } from '@services/api';

const PublicLayout = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const { loggedInUser, setLoggedInUser } = useLoggedInUserStore();

  useEffect(() => {
    const getLoggedUser = async () => {
      try {
        const response = await getLoggedUserAPI();
        const username = response.result;

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
