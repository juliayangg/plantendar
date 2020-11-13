import React, { useState } from 'react';
import './Plant.scss'
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default function Plant({ name, notSelectable, onChange, selectedPlant, watered, waterDateDetails }) {
  //TODO: this will break for new plants
  const plantUrl = process.env.PUBLIC_URL + '/plants/' + name.replace(/\s+/g, '').toLowerCase() + '.png';

  const classnames = classNames({
    'plant-img-container': true,
    'not-selectable': notSelectable || watered,
    'watered': watered,
    'selected': !notSelectable && !watered && selectedPlant === name,
  })

  const waterDate = waterDateDetails ? waterDateDetails[waterDateDetails.length-1] : null;
  
  return (
    <div className='plant-container'>
      <div className='plant-info'>
        <div className='plant-info-name'>{name}</div>
        Last watered: { waterDate ? waterDate.replace(/_/g, "/") : 'Never'}
        <br/> 
        { /* TODO: fix this, it doesnt work */}
        Notes: None
      </div>
      <div className={classnames}>
        <label>
          <img className='plant' src={plantUrl} />
          <input 
              type='radio' 
              name='select-plant'
              className='radio-select-plant'
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

Plant.propTypes = {
  name: PropTypes.string, 
  
  // select plant form - step 1 
  onChange: PropTypes.func, 
  selectedPlant: PropTypes.string,
  watered: PropTypes.bool, 
  waterDateDetails: PropTypes.array, 

  // select plant form - step 2
  notSelectable: PropTypes.bool,
}