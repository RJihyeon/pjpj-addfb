import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";

function MyReservPage() {

  const { content } = useParams();

  const cancelMyBookingClick = () => {
    const socket = socketIOClient("http://localhost:5000"); 
    

    socket.emit("sendcancel");

    // Close the socket connection when you're done
    socket.close();

  };

  return (
    <div>
      <NavComponent headerText="예약관리" bannerText="예약관리" />
      <p>예약내역</p>
      <div>
      <h1>My Reservation Page</h1>
      <p>Popup Content: {decodeURIComponent(content)}</p>
      {/* Add the rest of your component code */}
    </div>
      <button className="button" onClick={cancelMyBookingClick}>예약취소</button>
    
      
      <FooterComponent/>

    </div>
  );
}

export default MyReservPage;