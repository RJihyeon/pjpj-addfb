import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";
import socketIOClient from "socket.io-client";

function AdminPage() {

  const approveBookingClick = () => {
    const socket = socketIOClient("http://localhost:5000"); 
    
    socket.emit("sendapprove");

    // Close the socket connection when you're done
    socket.close();

  };

  const cancelBookingClick = () => {
    const socket = socketIOClient("http://localhost:5000"); 
    

    socket.emit("sendcancel");

    // Close the socket connection when you're done
    socket.close();

  };



  return (
    <div>
      <NavComponent headerText="관리자페이지" bannerText="관리자페이지" />
      <p>예약신청된 정보들을 여기에 불러옵니다</p>
      <button onClick={approveBookingClick}>예약승인</button>
      <button onClick={cancelBookingClick}>예약반려</button>
      <FooterComponent />
    </div>
  );
}

export default AdminPage;
