import React, { useState } from 'react';
import Calendar from './components/Calendar';
import PlantList from './components/PlantList';
import SelectPlant from './components/SelectPlant';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      plants: ['Frankie Jr', 'Pepperoni', 'Polly', 'Valerie', 'Penny']
    }
  }

  render() {
    console.log(this.state.plants, 'plants are');
    return (
      <div className='background'>
        <div className='container'>
          <div className='content-container'>
            <div className='welcome'>
              Hi Julia! Welcome to <span style={{color:'#8aab8c', fontWeight: '600'}}>Plantendar</span>, 
              the habit tracking calendar for your plants.
            </div>
            <div className='calendar-container'>
              <Calendar />
              <PlantList />
            </div>
          </div>
          <SelectPlant 
            plants={this.state.plants}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
