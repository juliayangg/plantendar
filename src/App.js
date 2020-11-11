import React, { useState } from 'react';
import Calendar from './components/Calendar';
import PlantList from './components/PlantList';
import './App.css'

function App() {
  return (
    <div className='background'>
      <div className='container'>
        <div className='plant-container'>
          <Calendar />
          <PlantList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
