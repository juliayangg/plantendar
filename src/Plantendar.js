import React, { useState } from 'react';
import Calendar from './components/Calendar';
import PlantList from './components/PlantList';
import SelectPlant from './SelectPlant';
import Header from './Header';
import './Plantendar.scss'

class Plantendar extends React.Component {
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
            <Header />
            <div className='calendar-container'>
              <Calendar />
              <div>
                <span style={{color:'#8aab8c', fontWeight: '600'}}>On this day</span>
                <PlantList />

                <span style={{color:'#8aab8c', fontWeight: '600'}}>Upcoming</span>
              </div>
              
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

export default Plantendar;
