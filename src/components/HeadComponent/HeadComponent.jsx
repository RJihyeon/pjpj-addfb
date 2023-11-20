// HeaderComponent.js

import React from "react";
import "./HeadComponent.css";
import logo from "./yonsei logo 1.png";
import person from "./person.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import axios from "axios";

function HeaderComponent(props) {
  const navigate = useNavigate();
  const { isLoggedIn, onLogin, isAdmin, onLoginAdmin, onLogout } = props;
  const handleLogoutSubmit = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logout");

      if (response.status === 200) {
        // 로그아웃 성공 시
        console.log("로그아웃 성공");
        onLogout(true);
        navigate("/login");
      } else {
        // 로그아웃 실패 시
        window.alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      // 에러 처리
      console.error("Error:", error);
      window.alert("로그아웃에 실패했습니다. 서버 오류입니다.");
    }
  };

  return (
    <div>
      <div className="header-header">
        <Link to="/">
          <div className="header-imgWrapper">
            <img src={logo} alt="Yonsei Logo" className="header-logo" />
          </div>
        </Link>

        <div className="header-login-container">
          {isLoggedIn ? (
            <>
              {/* 로그인 상태일 때 */}
              <Link to="/booking" className="header-book">
                시설대관
              </Link>
              <button className="header-logout" onClick={handleLogoutSubmit}>
                로그아웃
              </button>
              {/*관리자일 경우에만 관리자페이지 노출 */}
              {isAdmin && (
                <button className="header-myInfo">
                  <Link to="/adminpage">
                    <img src={person} alt="person" className="header-person" />
                  </Link>
                </button>
              )}
              <HeaderDropdown />
            </>
          ) : (
            <>
              {/* 로그아웃 상태일 때 */}
              <Link to="/signup" className="header-signup">
                회원가입
              </Link>
              <Link to="/login" className="header-login">
                로그인
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
