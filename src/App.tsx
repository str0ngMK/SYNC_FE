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
import Project from './router/profile/Project';
import Alarm from './router/profile/Alarm';
import Profile from './router/profile/Profile';

const isLogin = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={isLogin ? <Home /> : <Navigate to="login" />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/:userId/modify" element={<ModifyUser />}></Route>
      <Route path="/user/find/userId" element={<FindId />}></Route>
      <Route path="/user/find/password" element={<FindPassword />}></Route>
      <Route path="/profile" element={<Profile />}>
        <Route path="/profile/my" element={<MyProfile />}></Route>
        <Route path="/profile/auth" element={<Auth />}></Route>
        <Route path="/profile/project" element={<Project />}></Route>
        <Route path="/profile/alarm" element={<Alarm />}></Route>
      </Route>

      <Route path={'*'} element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
