import React, { useState } from 'react';
import Calendar from './components/Calendar';
import PlantList from './components/PlantList';
import SelectPlantForm from './SelectPlantForm';
import Header from './Header';
import './Plantendar.scss'

class Plantendar extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      plants: ['Frankie Jr', 'Pepperoni', 'Polly', 'Giraffe', 'Tallboi', 'Valerie', 'Penny'],
      date: new Date(),
      calendar: {},
    }
  }

  // addPlant = (plant) => {
  //   this.setState((prevState) => {
  //     return {
  //       plants: prevState.plants.concat(plant)
  //     }
  //   })
  // }

  handleChangeDate = (newDate) => {
    this.setState({
      date: newDate,
    })
  }

  handleWaterPlant = (plant) => {
    const d = this.state.date; 
    const date = d.getMonth()+1 + '_' + d.getDate() + '_' + d.getFullYear();
    
    this.setState((prevState) => {
      const updatedCalendar = prevState.calendar; 
      if (updatedCalendar[date]){
        updatedCalendar[date] = updatedCalendar[date].concat(plant.value);
      } else {
        updatedCalendar[date] = [plant.value]
      }
      return ({
        calendar: updatedCalendar,
      })
    })
  }

  render() {
    return (
      <div className='background'>
        <div className='container'>
          <div className='content-container'>
            <Header />
            <div className='calendar-container'>
              <Calendar date={this.state.date} onChangeDate={this.handleChangeDate} />
              <div>
                <span style={{color:'#8aab8c', fontWeight: '600'}}>Upcoming</span>
                <PlantList />
              </div>
              
            </div>
          </div>
          <SelectPlantForm 
            plants={this.state.plants}
            date={this.state.date}
            onSubmit={this.handleWaterPlant}
          />
        </div> 
      </div>
    );
  }
}

export default Plantendar;
