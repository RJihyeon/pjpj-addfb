import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import "./LoginComponent.css";
import axios from "axios";

function RegisterComponent() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    // 입력된 id와 password 값을 서버로 보내는 fetch 요청
    fetch('http://localhost:5000/login', {
      method: 'POST', // POST 요청을 사용하려면 메서드를 설정
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, password }), // JSON 형태로 데이터 전송
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        window.alert("일단 여기까진됨");
        navigate('/booking'); // 페이지 이동
      })
      .catch((error) => {
        // 에러 처리
        setIsLoading(false);
        console.error('Error:', error);
        
      });  
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
            type="text"
            className="pw-input"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="save-container">
            <input type="checkbox" />
            <span>아이디 저장하기</span>
          </div>
          <button className="login-click" onClick={handleSubmit}>로그인</button>
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
