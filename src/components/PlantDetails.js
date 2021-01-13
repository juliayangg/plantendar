import React, { useState } from 'react';
import './PlantDetails.scss'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Plant from './Plant';

const waterLevel = [1, 2, 3];
const health = [-1, 0, 1];

export default function PlantDetails({ selectedPlant, notes, onChange }) {
  
  
  const dropdownStyles = classNames({
    'detail': true,
    'dropdown-select': true
  })


  return (
      <>
        <Plant 
          name={selectedPlant}
          notSelectable={true}
        />
        <div className='details'> 
          {/* <div className='detail'>
            <label>Water Level</label>
            {waterLevel.map((w) => {
              return <input type='radio' name='water-level'></input>
            })}
          </div>
          <div className='detail'>
            <label>Health</label>
            {health.map((w) => {
              return <input type='radio' name='health-level'></input>
            })}
          </div> */}
          <div className='detail'>
            <label>Notes</label>
            <input type='text' value={notes} onChange={onChange} name='notes' />
          </div>
         <div className='detail'>
            <label>Name</label>
            <input type='text' value={selectedPlant} onChange={onChange} name='plant-name' />
          </div>
          <div className={dropdownStyles}>
            <label>Watering Cycle</label>
              <select>
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="30">30 days</option>
              </select>
          </div>
            

      </div>
    </>
  )
}