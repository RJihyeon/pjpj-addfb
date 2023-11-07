import HeaderComponent from "../components/HeadComponent/HeadComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";


function MyPage() {
  return (
    <div>
      <HeaderComponent headerText="마이페이지" bannerText="마이페이지" />
      <InfoComponent />
      
      <FooterComponent/>

    </div>
  );
}

export default MyPage;
