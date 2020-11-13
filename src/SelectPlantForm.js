import React, { useState } from 'react';
import './SelectPlantForm.scss'
import Plant from './components/Plant'; 
import AddPlant from './components/AddPlant';
import SelectPlant from './components/SelectPlant';
import PlantDetails from './components/PlantDetails';
import PropTypes from 'prop-types';

export default class SelectPlantForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      step: 1,
      selectedPlant: null,
      // selectedPlant: 'Pepperoni',
      notes: null,
    }
  }

  handleSubmit = event => {
    event.preventDefault(); 
    this.props.onSubmit(this.state.selectedPlant, this.state.notes);
    this.setState({ 
      step: 1,
      selectedPlant: null,
      notes: null,
    })
  }

  handleChange = event => {
    const selectedPlant = event.target?.value;
    this.setState({
      selectedPlant,
    })
  }

  cancel = () => {
    this.setState((prevState) => ({
      step: (prevState.step - 1),
      selectedPlant: null,
    }))
  }

  handleDetailChange = event => {
    console.log(event.target.value, 'settings notes to');
    this.setState({
      notes: event.target?.value,
    })
  }

  handleNext = () => {
    this.setState((prevState) => ({
      step: (prevState.step + 1),
    }))
  }

  render () { 
    // should we uncheck the radio select when we select a new date? 
    
    const { plants, notes, wateredList, waterDateDetails } = this.props; 
    const { step, selectedPlant } = this.state; 

    return (
      <form onSubmit={this.handleSubmit} className='select-container'>
        { step === 1 && <SelectPlant 
          plants={plants}
          wateredList={wateredList}
          waterDateDetails={waterDateDetails}
          selectedPlant={selectedPlant}
          handleChange={this.handleChange}
        /> }

        { step === 2 && 
        <PlantDetails
          selectedPlant={selectedPlant}
          notes={notes}
          onChange={this.handleDetailChange}
        /> }


        <div className='select-steps'>
          { step == 2 && <a onClick={this.cancel} className='button cancel'>Cancel</a> }
          { step == 1 && <a onClick={this.handleNext} className='button'>Add Details</a> }
          {/* <a onClick={this.handleSubmit} className='button'>Save</a> */}
          <input type='submit' className='button submit' value='Save' />
        </div>
      </form>
    );
  }
}

SelectPlantForm.propTypes = {
  plants: PropTypes.array,
  date: PropTypes.object,
  wateredList: PropTypes.array,
  waterDateDetails: PropTypes.object,
}
