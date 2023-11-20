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
  const [popupContent, setPopupContent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleBookingClick = () => {
    // 예약하기 버튼을 클릭하면 팝업 창을 보이도록 상태를 업데이트합니다.
    setPopupVisible(true);

    // Create the popup content with the selected values
    const content = `날짜: ${selectedDate}\n시간: ${selectedTimeIndex}\n시설: ${selectedCategoryIndex}`;
    setPopupContent(content);
  };

  const closePopup = () => {
    // 팝업 창을 닫는 함수
    setPopupVisible(false);
  };

  const handleDateChange = (date) => {
    // Update the selected date
    setSelectedDate(date);
  };

  return (
    <div>
      <NavComponent headerText="시설대관" bannerText="시설대관" />
      <div className="date">
        <p>1. 날짜 선택</p>
        <DateTimePicker selectedDateTime={selectedDate} onDateChange={handleDateChange} />
      </div>
      <div>
        <p className="time">2. 시간 선택</p>
      </div>
      <TimePicker onTimeSelect={setSelectedTimeIndex} />
      <p className="place">3. 시설 선택</p>
      <DropdownMenu onCategorySelect={setSelectedCategoryIndex} />
      <div>
        <button className="button" onClick={handleBookingClick}>
          예약신청
        </button>
      </div>

      {/* 예약 완료 팝업 창 */}
      {isPopupVisible && (
        <div className="popup">
          <p>{popupContent}</p>
          <button className="popupbutton" onClick={closePopup}>
            닫기
          </button>
        </div>
      )}

      <FooterComponent />
    </div>
  );
}

export default BookingPage;
