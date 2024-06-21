import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './router/Login';
import SignUp from './router/SignUp';
import ModifyUser from './router/user/Modify';
import Home from './router/Home';
import NotFound from './router/NotFound';
import FindId from './router/user/FindId';
import FindPassword from './router/user/FindPassword';
import MyProfile from './router/profile/MyProfile';
import Auth from './router/profile/Auth';
import Profile from './router/profile/Profile';
import Settings from './router/settings';
import ProjectSettings from './router/settings/Project';
import MembersSettings from './router/settings/Members';
import AlarmSettings from './router/settings/Alarm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/:userId/modify" element={<ModifyUser />}></Route>
      <Route path="/user/find/userId" element={<FindId />}></Route>
      <Route path="/user/find/password" element={<FindPassword />}></Route>
      <Route path="/profile" element={<Profile />}>
        <Route path="/profile/my" element={<MyProfile />}></Route>
        <Route path="/profile/auth" element={<Auth />}></Route>
      </Route>
      <Route path="/settings" element={<Settings />}>
        <Route path="/settings/project" element={<ProjectSettings />} />
        <Route path="/settings/members" element={<MembersSettings />} />
        <Route path="/settings/alarm" element={<AlarmSettings />} />
      </Route>
      <Route path={'*'} element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
