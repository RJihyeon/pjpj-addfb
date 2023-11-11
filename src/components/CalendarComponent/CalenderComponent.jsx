import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import koLocale from "@fullcalendar/core/locales/ko";
import "./Calendar.css";

function CalendarComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버로부터 데이터를 가져오는 API 요청 코드를 작성하세요.
        // 예: const response = await fetch('/full-calendar/calendar-admin');
        // 가져온 데이터를 events 배열로 설정하세요.
        // setEvents(data);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData(); // 컴포넌트가 마운트되었을 때 데이터를 가져오는 함수 호출
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  const handleAddTest = () => {
    // FullCalendar에 새 이벤트를 추가하는 코드를 작성하세요.
    // 예: calendar.getApi().addEvent({ title: 'evt4', start: '2019-09-04', end: '2019-09-06' });
  };

  return (
    <div>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          editable={true}
          droppable={true}
          locale={koLocale}
          events={events}
          aspectRatio={1.2}
          eventAdd={function (info) {
            // 이벤트가 추가될 때 발생하는 이벤트 핸들러
            console.log("Event added:", info.event);
          }}
        />
      </div>
    </div>
  );
}

export default CalendarComponent;
