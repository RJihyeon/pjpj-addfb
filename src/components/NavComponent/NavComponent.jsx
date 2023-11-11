import React from "react";
import "./NavComponent.css"; // HeaderComponent.css 파일을 import
import banner from "./yonsei_header.png";

function NavComponent(props) {
  return (
    <div className="nav-navigation">
      <img src={banner} alt="yonsei background" className="nav-banner" />
      <div className="nav-banner-text"> {props.bannerText} </div>
    </div>
  );
}

export default NavComponent;
