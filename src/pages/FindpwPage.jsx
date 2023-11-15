import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";
import { Link } from "react-router-dom";


function FindpwPage() {
  return (
    <div>
      <NavComponent headerText="비밀번호 찾기" bannerText="비밀번호 찾기" />
      <p></p>
      <button>비밀번호찾기</button>
      
    
      
      <FooterComponent/>

    </div>
  );
}

export default FindpwPage;
