import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/userLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectWrap from "./pages/UserProtectWrap";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrap from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrap>
              <Home />
            </UserProtectWrap>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProtectWrap>
              <UserLogout />
            </UserProtectWrap>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrap>
              <CaptainHome />
            </CaptainProtectWrap>
          }
        />
        <Route
          path="captains/logout"
          element={
            <CaptainProtectWrap>
              <CaptainLogout />
            </CaptainProtectWrap>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
App;
