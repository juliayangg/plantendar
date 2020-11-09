import ReactCalendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import stylesheet from './Calendar.scss'

function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <ReactCalendar
      calendarType='US'
      onChange={onChange}
      value={value}
      className={stylesheet.calendar}
    />
  );
}

export default Calendar;
