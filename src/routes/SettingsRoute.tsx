/**
 * src/routes/SettingsRoute.tsx
 */

import { Routes, Route } from "react-router-dom";
import Settings from "../router/settings";
import ProjectSettings from "../router/settings/Project";
import MembersSettings from "../router/settings/Members";
import AlarmSettings from "../router/settings/Alarm";

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
