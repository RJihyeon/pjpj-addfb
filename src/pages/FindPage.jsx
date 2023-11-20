import NavComponent from "../components/NavComponent/NavComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { Link } from "react-router-dom";
import FindComponent from "../components/FindComponent/FindComponent";
import styled from "styled-components";
import "../components/FindComponent/FindComponent.css";

const FindContainer = styled.div`
  background-color: #1c1c1c;
  height: 100vh;
  padding-top: 0px;
  position: relative;
`;

const FindBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function FindPage() {
  return (
    <div>
      <NavComponent
        headerText="아이디/비밀번호 찾기"
        bannerText="아이디/비밀번호 찾기"
      />
      <FindContainer>
        <FindBox>
          <p className="find-title">아이디/비밀번호 찾기</p>
          <FindComponent />
        </FindBox>
      </FindContainer>

      <FooterComponent />
    </div>
  );
}

export default FindPage;
