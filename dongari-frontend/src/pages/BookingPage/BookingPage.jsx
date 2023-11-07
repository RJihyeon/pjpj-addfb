import React, { useState } from "react";
import HeaderComponent from "../../components/HeadComponent/HeadComponent";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import TimePicker from "../../components/TimePicker/TimePicker";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import "./BookingPage.css";

function BookingPage() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBookingClick = () => {
    // 예약하기 버튼을 클릭하면 팝업 창을 보이도록 상태를 업데이트합니다.
    setPopupVisible(true);
  };

  const closePopup = () => {
    // 팝업 창을 닫는 함수
    setPopupVisible(false);
  };

  return (
    <div>
      <HeaderComponent headerText="시설대관" bannerText="시설대관" />
      <h1>날짜를 고르세요</h1>
      <DateTimePicker />
      <h1>시간을 고르세요</h1>
      <TimePicker />
      <DropdownMenu />
      <button onClick={handleBookingClick}>예약하기</button>

      {/* 예약 완료 팝업 창 */}
      {isPopupVisible && (
        <div className="popup">
          <p>예약이 신청되었습니다. 예약 승인/반려는 마이페이지에서 확인 가능합니다. 예약 취소도 마이페이지에서 해주세요.</p>
          <button onClick={closePopup}>닫기</button>
        </div>
      )}

      <FooterComponent />
    </div>
  );
}

export default BookingPage;
