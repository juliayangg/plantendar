import React, { useState } from 'react';
import './SelectPlant.scss'
import Plant from './Plant'; 
import AddPlant from './AddPlant';
import PropTypes from 'prop-types';

export default class SelectPlant extends React.Component {
  constructor(props) {
    super(props); 
  }

  render () { 
    const { plants, wateredList, waterDateDetails, selectedPlant } = this.props; 

    return (
      <div className='plant-select-container'>
        { plants.map((p, index) => {
          return (<Plant 
            key={index} 
            name={p}
            onChange={this.props.handleChange} 
            selectedPlant={selectedPlant}
            watered={wateredList.includes(p)}
            waterDateDetails={waterDateDetails[p] ? waterDateDetails[p] : null }
          />)
        })}
        {/* <AddPlant /> */}
      </div>
    );
  }
}

SelectPlant.propTypes = {
  plants: PropTypes.array,
  date: PropTypes.object,
  wateredList: PropTypes.array,
  waterDateDetails: PropTypes.object,
}
