import React, { useState } from 'react';
import './PlantDetails.scss'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Plant from './Plant';

const waterLevel = [1, 2, 3];
const health = [-1, 0, 1];

export default function PlantDetails({ selectedPlant, notes, onChange }) {
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
      </div>
    </>
  )
}