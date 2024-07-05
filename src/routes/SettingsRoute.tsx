/**
 * src/routes/SettingsRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import Settings from '../pages/settings';
import ProjectSettings from '../pages/settings/Project';
import MembersSettings from '../pages/settings/Members';
import AlarmSettings from '../pages/settings/Alarm';

const SettingsRoute = () => (
  <Routes>
    <Route path="/" element={<Settings />}>
      <Route index element={<ProjectSettings />} />
      <Route path="project" element={<ProjectSettings />} />
      <Route path="members" element={<MembersSettings />} />
      <Route path="alarm" element={<AlarmSettings />} />
    </Route>
  </Routes>
);
export default SettingsRoute;
