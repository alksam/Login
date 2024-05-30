// CalendarComponent.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CalendarStyles from '../styles/CalendarStyles';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const renderDays = () => {
    const daysArray = [];
    for (let i = 0; i < 42; i++) {
      if (i >= firstDayOfMonth && i < firstDayOfMonth + daysInMonth) {
        const day = i - firstDayOfMonth + 1;
        daysArray.push(
          <div
            key={i}
            className="day"
            style={{ backgroundColor: selectedDate && selectedDate.getDate() === day ? '#ccc' : 'inherit' }}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        );
      } else {
        daysArray.push(<div key={i} className="day empty" />);
      }
    }
    return daysArray;
  };

  const handleDayClick = (day) => {
    const selectedDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(selectedDay);
    setShowMessage(true);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <>
      <CalendarStyles />
      <div className="calendar-container">
        <div className="header">
        <button className="button">
            <NavLink to="/home" className="navlink" onClick={() => console.log("Go to Home")}>Home</NavLink>
          </button>
        
         
          <button className="button" onClick={() => console.log("Choose Date")}>Choose Date</button>
        </div>
        <div className="calendar">
        <button  onClick={prevMonth}>&lt;</button>
        <div >{months[currentMonth.getMonth()]}</div>
        <button  onClick={nextMonth}>&gt;</button>
          <div className="days">
            {days.map((day) => (
              <div key={day} className="dayHeader">
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
        </div>
        {showMessage && selectedDate && (
          <div className="selectedDayMessage">
            You have selected: {selectedDate.toLocaleDateString()}
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
