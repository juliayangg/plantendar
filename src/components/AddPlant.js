import React, { useState } from 'react';
import './Plant.scss'

function AddPlant() {
  return (
    <div className='plant'>
      <div className='plant-img'>
        <span>+</span>
      </div>
      New Plant
    </div>
  );
}

export default AddPlant;