import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import './DateTimePicker.css'; 


const DateTimePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const options = {
    enableTime: false,
    altInput: true,
    altFormat: 'Y-m-d',
    dateFormat: 'Y-m-d',
  
    disable: [
      function (date) {
        return date.getDay() === 0 || date.getDay() === 6;
      },
    ],
    locale: {
      firstDayOfWeek: 0, // Sunday as the first day of the week
      weekdays: {
        shorthand: ['일', '월', '화', '수', '목', '금', '토'],
        longhand: [
          '일요일',
          '월요일',
          '화요일',
          '수요일',
          '목요일',
          '금요일',
          '토요일',
        ],
      },
    },
  };

  const handleDateChange = (selectedDates) => {
    setSelectedDateTime(selectedDates[0]);
  };

  return (
    <div className="dateTime">
      <Flatpickr
        value={selectedDateTime}
        options={options}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateTimePicker;
