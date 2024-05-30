// CalendarStyles.js
import { createGlobalStyle } from 'styled-components';

const CalendarStyles = createGlobalStyle`
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-gray-200);
    border-radius: 15px;
    padding: 20px;
    width: 500px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }

  .month {
    font-size: 20px;
    font-weight: bold;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    width: 100%;
  }

  .dayHeader {
    text-align: center;
    font-weight: bold;
  }

  .day {
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--color-gray-200);
    cursor: pointer;
    user-select: none;
  }

  .empty {
    visibility: hidden;
  }

  .selectedDayMessage {
    margin-top: 10px;
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
  }
`;

export default CalendarStyles;
