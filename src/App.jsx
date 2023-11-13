import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import HeaderComponent from "./components/HeadComponent/HeadComponent";
import "./App.css";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/AdminPage";
import MyReservPage from "./pages/MyReservPage";

function App() {
  // 로그인 상태 확인
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // 관리자 로그인 상태 확인
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // 서버에서 로그인 상태 및 관리자 여부를 가져오는 로직
    const fetchLoginStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/checklogin");
        const data = await response.json();

        if (data.success) {
          setIsLoggedIn(true);
          setIsAdmin(data.isAdmin);
        } else {
          setIsLoggedIn(false);
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching login status:", error);
      }
    };

    fetchLoginStatus();
  }, []);

  const handleLogin = () => {
    // 로그인 처리 로직 추가(로그인 됐으면 useState(true)로 바꿔주기)
    setIsLoggedIn(true);
    // 여기서 관리자 여부를 확인하는 로직을 추가
    // 예: 서버에서 관리자 여부를 가져와서 setIsAdmin(true)로 설정
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="App">
        <HeaderComponent
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          isAdmin={isAdmin}
        />

        <Routes>
          {/* 로그인 여부에 따라 다르게 라우팅 */}
          {isLoggedIn ? (
            // 로그인한 경우
            <>
              <Route path="/" element={<Navigate to="/booking" />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/mypage" element={<MyPage />} />
              {isAdmin && <Route path="/adminpage" element={<AdminPage />} />}
              {/* 추가적인 로그인 후 라우트들 */}
            </>
          ) : (
            // 로그인하지 않은 경우
            <>
              <Route path="/" element={<Navigate to="/login" />} />
              {/* 추가적인 로그아웃 상태에서의 라우트들 */}
            </>
          )}
          {/* 공통 또는 로그인 상태에 따라 보이는 라우트들 */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/myreservpage" element={<MyReservPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
