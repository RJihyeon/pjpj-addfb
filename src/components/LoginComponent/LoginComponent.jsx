import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./LoginComponent.css";
import axios from "axios";

function RegisterComponent({ onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        id,
        password,
      });

      if (response.status === 200) {
        // 로그인 성공 시
        console.log("성공");
        if (onLogin) {
          onLogin(true);
        }
        // 리다이렉션
        navigate("/booking");
      } else {
        // 로그인 실패 시
        window.alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
        setIsLoading(false);
      }
    } catch (error) {
      // 에러 처리
      setIsLoading(false);
      console.error("Error:", error);
      window.alert("로그인에 실패했습니다. 서버 오류입니다.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <p className="login">로그인</p>
          <p className="info">가입하신 아이디와 패스워드를 입력해주세요</p>
          <input
            type="text"
            className="id-input"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            className="pw-input"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="save-container">
            <input type="checkbox" />
            <span>아이디 저장하기</span>
          </div>
          <button className="login-click" onClick={handleSubmit}>
            로그인
          </button>
          <div className="container1">
            <button className="find">아이디/비밀번호 찾기</button>
            <Link to="/signup">
              <button className="signup">회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
