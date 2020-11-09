// import Calendar from 'react-calendar';
import React, { useState } from 'react';
// import 'react-calendar/dist/Calendar.css';
import Calendar from './components/Calendar';
import stylesheet from './App.css'

function App() {
  const [value, onChange] = useState(new Date());

  console.log('stylesheet is', stylesheet);

  return (
    <div className={stylesheet.background}>
      <Calendar />
    </div>
  );
}

export default App;
