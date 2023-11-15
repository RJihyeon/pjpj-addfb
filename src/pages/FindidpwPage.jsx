import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";
import { Link } from "react-router-dom";


function FindidpwPage() {
  return (
    <div>
      <NavComponent headerText="아이디비번찾기" bannerText="아이디비번찾기" />
      <div>
      <button className="idButton">
      <Link to="/FindidPage">
      아이디찾기
      </Link>
      </button>
      </div>
      <div>
      <button className="pwButton">
      <Link to="/FindpwPage">
      비밀번호찾기
      </Link>
      </button>
      </div>
      
      <FooterComponent/>

    </div>
  );
}

export default FindidpwPage;
