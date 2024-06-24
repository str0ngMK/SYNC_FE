/**
 * src/routes/MainRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import NotFound from '../router/NotFound';
import Login from '../router/Login';
import SignUp from '../router/SignUp';
import Home from '../router/Home';
import ProfileRoute from './ProfileRoute';
import SettingsRoute from './SettingsRoute';
import ModifyUser from '../router/user/Modify';
import FindId from '../router/user/FindId';
import FindPassword from '../router/user/FindPassword';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const MainRoutes = () => (
  /*
    const { loggedInUser, setLoggedInUser } = useLoggedInUserStore();
  console.log(loggedInUser);

  useEffect(() => {
    const getLoggedUser = async () => {
      const response = (await axios.get(
        'https://158.247.197.212:9090/api/user/info',
        { withCredentials: true },
      )) as AxiosResponse<{ value: { username: string } }, any>;
      const { username } = response.data.value;
      return username || '';
    };
    getLoggedUser().then((username) => setLoggedInUser(username));
  }, []);
  */

  <Routes>
    {/* routes not auth only */}
    <Route element={<PrivateRoutes />}>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Route>

    {/* routes auth only */}
    <Route element={<PublicRoutes />}>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<ProfileRoute />} />
      <Route path="/settings/*" element={<SettingsRoute />} />
      {/* 아래 user쪽 route는 추후 정리 필요해 보임 */}
      <Route path="/:userId/modify" element={<ModifyUser />}></Route>
      <Route path="/user/find/userId" element={<FindId />}></Route>
      <Route path="/user/find/password" element={<FindPassword />}></Route>
    </Route>

    <Route path={'*'} element={<NotFound />}></Route>
  </Routes>
);

export default MainRoutes;
