import React, { useState } from 'react';
import './Plant.scss'
import classNames from 'classnames';

export default function Plant({ name, onChange, selectedPlant }) {
  //TODO: this will break for new plants
  const plantUrl = process.env.PUBLIC_URL + '/plants/' + name.replace(/\s+/g, '').toLowerCase() + '.png';

  let classnames = classNames({
    'plant-img-container': true,
    'selected': selectedPlant?.value === name,
    'watered': false,
  })

  return (
    <div className='plant-container'>
      <div className={classnames}>
        <label>
          <img src={plantUrl} />
          <input 
              type='radio' 
              name='select-plant'
              onChange={onChange} 
              value={name}
              // disabled={}
          />
        </label>

      </div>
      {name}
    </div>
  );
}
