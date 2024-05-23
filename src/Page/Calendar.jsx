import React, { useState } from 'react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const renderDays = () => {
    const daysArray = [];

    for (let i = 0; i < 42; i++) {
      if (i >= firstDayOfMonth && i < firstDayOfMonth + daysInMonth) {
        daysArray.push(
          <div key={i} className="day">
            {i - firstDayOfMonth + 1}
          </div>
        );
      } else {
        daysArray.push(<div key={i} className="day empty" />);
      }
    }

    return daysArray;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <div className="month">{months[currentMonth.getMonth()]}</div>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days">
        {days.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;