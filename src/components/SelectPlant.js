import React, { useState } from 'react';
import stylesheet from './SelectPlant.scss'
import Plant from './Plant'; 
import AddPlant from './AddPlant';

function SelectPlant({ plants }) {
  return (
    <div className='select-container'>
      { plants.map((p, index) => {
        return <Plant key={index} name={p} />
      })}
      <AddPlant />
    </div>
  );
}

export default SelectPlant;
