// HeaderComponent.js

import React from "react";
import "./HeadComponent.css"; // HeaderComponent.css 파일을 import
import logo from "./yonsei logo 1.png";
import person from "./person.png";
import { Link } from "react-router-dom";

function HeaderComponent(props) {
  return (
    <div>
      <div className="header-header">
        <Link to="/">
          <div className="header-imgWrapper">
            <img src={logo} alt="Yonsei Logo" className="header-logo" />
          </div>
        </Link>

        <div className="header-login-container">
          {props.isLoggedIn ? (
            <>
              {/* 로그인 상태일 때 */}
              <Link to="/booking" className="header-book">
                시설대관
              </Link>
              {/*관리자일 경우에만 관리자페이지 노출 */}
              {props.isAdmin && (
                <Link to="/adminpage" className="header-admin">
                  관리자페이지
                </Link>
              )}
              <button className="header-myInfo">
                <Link to="/mypage">
                  <img src={person} alt="person" className="header-person" />
                </Link>
              </button>
              <button className="header-logout" onClick={props.onLogout}>
                로그아웃
              </button>
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
