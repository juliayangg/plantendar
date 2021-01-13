import React, { useState } from 'react';
import './Plant.scss'

const addPlant = () => {
  console.log('clicked add plant');
}

export default function AddPlant() {
  return (
    <div className='plant-container'>
      <div className='plant-img-container' onClick={addPlant}>
        <label>
          <img src={process.env.PUBLIC_URL + '/plants/new-plant.png'} alt='plant with question mark' />
        </label>
      </div>
      New Plant
    </div>
  );
}