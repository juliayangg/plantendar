import React, { useState } from 'react';
import './SelectPlantForm.scss'
import Plant from './components/Plant'; 
import AddPlant from './components/AddPlant';

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
    console.log('selected plant inside handleChange is', selectedPlant.value);
    this.setState({
      selectedPlant,
    })
  }

  render () { 
    return (
      <form onSubmit={this.handleSubmit} className='select-container'>
        <div className='plant-select-container'>
          { this.props.plants.map((p, index) => {
            console.log()
            return (<Plant 
              key={index} 
              name={p}
              onChange={this.handleChange} 
              selectedPlant={this.state.selectedPlant}
            />)
          })}
          <AddPlant />
        </div>
        <div className='select-steps'>
          {/* with multiple steps: skip / next */}
          <input type='submit' className='button' value='Save' />
        </div>
      </form>
    );
  }
}
