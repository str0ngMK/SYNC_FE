/**
 * src/routes/MainRoute.tsx
 */
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import FindId from '../pages/user/FindId';
import FindPassword from '../pages/user/FindPassword';
import ModifyUser from '../pages/user/Modify';
import ProfileRoute from './ProfileRoute';
import ProjectRoute from './ProjectRoute';
import SettingsRoute from './SettingsRoute';

const MainRoutes = () => (
  <Routes>
    {/* routes not auth only */}
    <Route element={<Layout />}>
      {/* PublicLayout */}
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<ProfileRoute />} />
      <Route path="/settings/*" element={<SettingsRoute />} />
      {/* 아래 user쪽 route는 추후 정리 필요해 보임 */}
      <Route path="/:userId/modify" element={<ModifyUser />}></Route>
      <Route path="/user/find/userId" element={<FindId />}></Route>
      <Route path="/user/find/password" element={<FindPassword />}></Route>

      <Route path="/projects/*" element={<ProjectRoute />}></Route>
    </Route>

    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>

    {/* routes auth only */}

    <Route path={'*'} element={<NotFound />}></Route>
  </Routes>
);

export default MainRoutes;
