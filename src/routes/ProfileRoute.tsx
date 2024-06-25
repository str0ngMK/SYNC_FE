/**
 * src/routes/ProfileRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import Profile from '../router/profile/Profile';
import MyProfile from '../router/profile/MyProfile';
import Auth from '../router/profile/Auth';

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
