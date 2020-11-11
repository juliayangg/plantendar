import ReactCalendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import stylesheet from './Calendar.scss'

export default function Calendar({ date, onChangeDate }) {
  return (
    <ReactCalendar
      calendarType='US'
      onChange={onChangeDate}
      value={date}
      className={stylesheet.calendar}
      maxDate={new Date()} // cannot select past today's date
    />
  );
}
