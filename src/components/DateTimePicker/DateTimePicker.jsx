// DateTimePicker.js

import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import './DateTimePicker.css';

const DateTimePicker = ({ selectedDateTime, onDateChange }) => {
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
    onDateChange(selectedDates[0].toISOString().split('T')[0]); // Extracting the Y-m-d part
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
