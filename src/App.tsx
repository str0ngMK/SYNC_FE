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

const isLogin = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={isLogin ? <Home /> : <Navigate to="login" />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/:userId/modify" element={<ModifyUser />}></Route>
      <Route path={'*'} element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
