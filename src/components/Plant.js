import React, { useState } from 'react';
import './Plant.scss'

function Plant({ name }) {
  return (
    <div className='plant'>
      <div className='plant-img'>
        
      </div>
      {name}
    </div>
  );
}

export default Plant;
