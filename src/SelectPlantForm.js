import React, { useState } from 'react';
import './SelectPlantForm.scss'
import Plant from './components/Plant'; 
import AddPlant from './components/AddPlant';
import PropTypes from 'prop-types';

export default class SelectPlantForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      // step: 1,
      selectedPlant: null,
    }
  }

  handleSubmit = event => {
    event.preventDefault(); 
    this.props.onSubmit(this.state.selectedPlant);
  }

  handleChange = event => {
    const selectedPlant = event.target;
    this.setState({
      selectedPlant,
    })
  }

  render () { 
    // should we uncheck the radio select when we select a new date? 
    
    const { plants, date, wateredList, lastWaterDate } = this.props; 
    const { selectedPlant } = this.state; 

    return (
      <form onSubmit={this.handleSubmit} className='select-container'>
        <div className='plant-select-container'>
          { plants.map((p, index) => {
            return (<Plant 
              key={index} 
              name={p}
              onChange={this.handleChange} 
              selectedPlant={selectedPlant}
              watered={wateredList.includes(p)}
              lastWaterDate={lastWaterDate[p] ? lastWaterDate[p] : null }
            />)
          })}
          {/* <AddPlant /> */}
        </div>
        <div className='select-steps'>
          {/* with multiple steps: skip / next */}
          <input type='submit' className='button' value='Save' />
        </div>
      </form>
    );
  }
}

SelectPlantForm.propTypes = {
  plants: PropTypes.array,
  date: PropTypes.object,
  wateredList: PropTypes.array,
  lastWaterDate: PropTypes.object,
}
