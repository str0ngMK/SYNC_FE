/**
 * src/routes/SettingsRoute.tsx
 */
import { Route, Routes } from 'react-router-dom';

import Settings from '@pages/settings';
import AlarmSettings from '@pages/settings/Alarm';
import MembersSettings from '@pages/settings/Members';
import ProjectSettings from '@pages/settings/Project';

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
