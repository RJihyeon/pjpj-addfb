import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import HeaderComponent from "./components/HeadComponent/HeadComponent";
import "./App.css";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/AdminPage";

function App() {
  //로그인 상태 확인
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    //로그인 처리 로직 추가
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    //로그아웃 처리 로직
    setIsLoggedIn(false);
  };

  return (
    /* 주석 지울 것 */
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/adminpage" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
