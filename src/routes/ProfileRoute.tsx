/**
 * src/routes/ProfileRoute.tsx
 */
import { Route, Routes } from 'react-router-dom';

import Auth from '@pages/profile/Auth';
import MyProfile from '@pages/profile/MyProfile';
import Profile from '@pages/profile/Profile';

const ProfileRoute = () => (
  <Routes>
    <Route path="/" element={<Profile />}>
      <Route index element={<MyProfile />} />
      <Route path="my" element={<MyProfile />}></Route>
      <Route path="auth" element={<Auth />}></Route>
    </Route>
  </Routes>
);
export default ProfileRoute;
