import HeaderComponent from "../components/HeadComponent/HeadComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";


function MyPage() {
  return (
    <div>
      <NavComponent headerText="마이페이지" bannerText="마이페이지" />
      <InfoComponent />
      
      <FooterComponent/>

    </div>
  );
}

export default MyPage;
