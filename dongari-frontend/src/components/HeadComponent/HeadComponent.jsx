import React from "react";
import "./HeadComponent.css"; // HeaderComponent.css 파일을 import
import logo from "./yonsei logo 1.png";
import person from "./person.png";
import banner from "./yonsei_header.png";
import { Link } from 'react-router-dom';

function HeaderComponent(props) {
  return (
    <div>
      <div className="header">
      <Link to="/"><img src={logo} alt="Yonsei Logo" className="logo" /></Link>

        <div className="login-container">
        <Link to='/booking'>시설대관</Link>
        <Link to='/adminpage'>관리자페이지</Link>  
          <button className="myInfo">
          <Link to='/mypage'><img src={person} alt="person" className="person" /></Link>
          </button>
          <Link to='/signup'>회원가입</Link>
        </div>
      </div>
      <div className="navigation">
        <img src={banner} alt="yonsei background" className="banner" />
        <div className="banner-text"> {props.bannerText} </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
