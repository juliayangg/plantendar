import React, { useState } from 'react';
import './Plant.scss'
import classNames from 'classnames';

export default function Plant({ name, onChange, selectedPlant, watered, lastWaterDate }) {
  //TODO: this will break for new plants
  const plantUrl = process.env.PUBLIC_URL + '/plants/' + name.replace(/\s+/g, '').toLowerCase() + '.png';

  const classnames = classNames({
    'plant-img-container': true,
    'watered': watered,
    'selected': !watered && selectedPlant?.value === name,
  })

  const waterDate = lastWaterDate?.replace(/_/g, "/");

  return (
    <div className='plant-container'>
      <div className='plant-info'>
        <div className='plant-info-name'>{name}</div>
        Last watered: { lastWaterDate ? waterDate : 'Never'}
      </div>
      <div className={classnames}>
        <label>
          <img class='plant' src={plantUrl} />
          <input 
              type='radio' 
              name='select-plant'
              class='radio-select-plant'
              onChange={onChange} 
              value={name}
              disabled={watered}
          />
        </label>

      </div>
      {name}
    </div>
  );
}