import { Navigate, Outlet } from 'react-router-dom';

import useLoggedInUserStore from '@libs/store/store';

const AuthLayout = () => {
  const { loggedInUser } = useLoggedInUserStore();
  if (loggedInUser) return <Navigate to="/" />;
  return <Outlet />;
};

export default AuthLayout;
