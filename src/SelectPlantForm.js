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
    console.log('handle submit of form');
    this.props.onSubmit(this.state.selectedPlant);
  }

  handleChange = event => {
    const selectedPlant = event.target;
    this.setState({
      selectedPlant,
    })
  }

  render () { 
    return (
      <form onSubmit={this.handleSubmit} className='select-container'>
        <div className='plant-select-container'>
          { this.props.plants.map((p, index) => {
            return (<Plant 
              key={index} 
              name={p}
              onChange={this.handleChange} 
              selectedPlant={this.state.selectedPlant}
              watered={this.props.wateredList.includes(p)}
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
}
