import React, { useState } from 'react';
import stylesheet from './SelectPlant.scss'
import Plant from './components/Plant'; 
import AddPlant from './components/AddPlant';

function SelectPlant({ plants }) {
  return (
    <div className='select-container'>
      <div className='plant-select-container'>
        { plants.map((p, index) => {
          return <Plant key={index} name={p} />
        })}
        <AddPlant />
      </div>
      {/* <div className='select-steps'>
        prev / next
      </div> */}
    </div>
    
  );
}

export default SelectPlant;
