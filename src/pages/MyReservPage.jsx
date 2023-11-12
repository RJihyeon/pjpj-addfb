import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";


function MyReservPage() {
  return (
    <div>
      <NavComponent headerText="My 예약" bannerText="My 예약" />
      <p>예약신청된 정보들을 여기에 불러옵니다</p>
      <button className="button">예약취소</button>
    
      
      <FooterComponent/>

    </div>
  );
}

export default MyReservPage;