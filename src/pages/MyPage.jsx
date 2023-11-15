import InfoComponent from "../components/InfoComponent/InfoComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";

function MyPage({ isLoggedIn }) {
  return (
    <div>
      <NavComponent headerText="마이페이지" bannerText="회원정보수정" />
      {isLoggedIn && <InfoComponent isLoggedIn={isLoggedIn} />}
      <FooterComponent />
    </div>
  );
}

export default MyPage;
