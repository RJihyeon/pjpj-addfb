// TimePicker.jsx

import React, { useState } from 'react';
import './TimePicker.css';

const TimePicker = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlotMappings = {
    '9-12': 0,
    '12-14': 1,
    '14-16': 2,
    '16-18': 3,
    '18-20': 4,
    '20-22': 5,
  };

  const handleSelectTime = (time) => {
    const index = timeSlotMappings[time];
    setSelectedTime(index);
    if (onTimeSelect && typeof onTimeSelect === 'function') {
      onTimeSelect(index);
    }
  };

  return (
    <div className="timePicker">
      {Object.keys(timeSlotMappings).map((time) => (
        <button
          key={time}
          className={selectedTime === timeSlotMappings[time] ? 'clicked' : ''}
          onClick={() => handleSelectTime(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimePicker;
