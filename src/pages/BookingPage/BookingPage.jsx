import React, { useState } from "react";
import HeaderComponent from "../../components/HeadComponent/HeadComponent";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import TimePicker from "../../components/TimePicker/TimePicker";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import "./BookingPage.css";
import NavComponent from "../../components/NavComponent/NavComponent";

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
      <NavComponent headerText="시설대관" bannerText="시설대관" />
      <div className="date">
      <p>1. 날짜 선택</p>
      <DateTimePicker />
      </div>
      <div>
      <p className="time">2. 시간 선택</p>
      </div>
      <TimePicker />
      <p className="place">3. 시설 선택</p>
      <DropdownMenu />
      <div>
      <button className="button" onClick={handleBookingClick}>예약신청</button>
      </div>
      

      {/* 예약 완료 팝업 창 */}
      {isPopupVisible && (
        <div className="popup">
          <p>예약이 신청되었습니다. 예약 승인/반려는 마이페이지에서 확인 가능합니다. 예약 취소도 마이페이지에서 가능합니다.</p>
          <button className="popupbutton" onClick={closePopup}>닫기</button>
        </div>
      )}

      <FooterComponent />
    </div>
  );
}

export default BookingPage;
