import React, { useState } from 'react';
import './TimePicker.css'; // CSS 파일을 import 합니다.

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = ['9-12', '12-14', '14-16', '16-18', '18-20', '20-22'];

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="timePicker">
      {timeSlots.map((time, index) => (
        <button
          key={index}
          className={selectedTime === time ? 'clicked' : ''}
          onClick={() => handleSelectTime(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimePicker;
