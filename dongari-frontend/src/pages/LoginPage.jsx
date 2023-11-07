import HeaderComponent from "../components/HeadComponent/HeadComponent";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import RegisterComponent from "../components/LoginComponent/LoginComponent";

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 아이디를 불러옴
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setIsChecked(true);
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      localStorage.setItem("username", username); // 아이디 저장
    } else {
      localStorage.removeItem("username"); // 아이디 삭제
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <HeaderComponent headerText="로그인" bannerText="로그인" />
      <RegisterComponent />
      <FooterComponent />
    </div>
  );
}

export default LoginPage;
