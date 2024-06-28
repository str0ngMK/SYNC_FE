/**
 * src/routes/MainRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ProfileRoute from './ProfileRoute';
import SettingsRoute from './SettingsRoute';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import ModifyUser from '../pages/user/Modify';
import FindId from '../pages/user/FindId';
import FindPassword from '../pages/user/FindPassword';

const MainRoutes = () => (
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
