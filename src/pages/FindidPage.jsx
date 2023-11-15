import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";
import { Link } from "react-router-dom";


function FindidPage() {
  return (
    <div>
      <NavComponent headerText="아이디 찾기" bannerText="아이디 찾기" />
      <p></p>
      <button>아이디찾기</button>
      
    
      
      <FooterComponent/>

    </div>
  );
}

export default FindidPage;
