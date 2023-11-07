import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";


function AdminPage() {
  return (
    <div>
      <HeaderComponent headerText="관리자페이지" bannerText="관리자페이지" />
      <p>예약신청된 정보들을 여기에 불러옵니다</p>
      <button>예약승인</button>
      <button>예약반려</button>
    
      
      <FooterComponent/>

    </div>
  );
}

export default AdminPage;
