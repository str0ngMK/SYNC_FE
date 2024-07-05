/**
 * src/routes/ProfileRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/profile/Profile';
import MyProfile from '../pages/profile/MyProfile';
import Auth from '../pages/profile/Auth';

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
