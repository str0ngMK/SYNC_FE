import { Navigate, Outlet } from 'react-router-dom';
import useLoggedInUserStore from '../lib/store/store';

const PrivateRoutes = () => {
  const { loggedInUser } = useLoggedInUserStore();
  if (loggedInUser) return <Navigate to="/" />;
  return <Outlet />;
};

export default PrivateRoutes;
