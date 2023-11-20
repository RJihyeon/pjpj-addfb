import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";

function AdminPage() {
  const [reservationInfo, setReservationInfo] = useState(null);

  useEffect(() => {
    // Set up the socket connection when the component mounts
    const socket = socketIOClient("http://localhost:5000");

    // Listen for reservation updates from the server
    socket.on("reservationUpdate", (data) => {
      // Update the state with the received reservation information
      setReservationInfo(data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const getBookingClick = () => {
    // Trigger the server to send reservation information
    const socket = socketIOClient("http://localhost:5000");
    socket.emit("getReservationInfo");
    socket.close(); // Close the socket connection when you're done
  };

  const approveBookingClick = () => {
    const socket = socketIOClient("http://localhost:5000");
    socket.emit("sendapprove");
    socket.close();
  };

  const cancelBookingClick = () => {
    const socket = socketIOClient("http://localhost:5000");
    socket.emit("sendcancel");
    socket.close();
  };

  return (
    <div>
      <NavComponent headerText="관리자페이지" bannerText="관리자페이지" />

      <button onClick={getBookingClick}>예약정보불러오기</button>
      <p>{reservationInfo ? `예약 정보: ${JSON.stringify(reservationInfo)}` : "예약정보가 없습니다."}</p>

      <button onClick={approveBookingClick}>예약승인</button>
      <button onClick={cancelBookingClick}>예약반려</button>

      <FooterComponent />
    </div>
  );
}

export default AdminPage;
