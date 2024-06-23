/**
 * src/routes/MainRoute.tsx
 */

import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import ProfileRoute from "./ProfileRoute";
import SignUp from "../router/SignUp";
import Login from "../router/Login";
import ModifyUser from "../router/user/Modify";
import FindId from "../router/user/FindId";
import FindPassword from "../router/user/FindPassword";
import NotFound from "../router/NotFound";
import SettingsRoute from "./SettingsRoute";

const isLogin = false; // 추후 전역 상태로 넣어야 할것으로 보임

const MainRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<App />} /> */}
    <Route path="/" element={isLogin ? <App /> : <Navigate to="login" />} />
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/profile/*" element={<ProfileRoute />} />
    <Route path="/settings/*" element={<SettingsRoute />} />

    {/* 아래 user쪽 route는 추후 정리 필요해 보임 */}
    <Route path="/:userId/modify" element={<ModifyUser />}></Route>
    <Route path="/user/find/userId" element={<FindId />}></Route>
    <Route path="/user/find/password" element={<FindPassword />}></Route>
    <Route path={"*"} element={<NotFound />}></Route>
  </Routes>
);

export default MainRoutes;
