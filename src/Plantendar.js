import React, { useState } from 'react';
import Calendar from './components/Calendar';
import PlantList from './components/PlantList';
import SelectPlantForm from './SelectPlantForm';
import Header from './Header';
import './Plantendar.scss'

function getShortedDate(d){
  return d.getMonth()+1 + '_' + d.getDate() + '_' + d.getFullYear();
}

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
    const date = getShortedDate(this.state.date);

    this.setState((prevState) => {
      const updatedCalendar = prevState.calendar; 
      if (updatedCalendar[date]?.includes(plant.value)) {
        return;
      }

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
    const { plants, date, calendar } = this.state; 

    console.log(calendar);
    const calendarDate = getShortedDate(date);
    console.log('watered list', calendar[calendarDate]);

    return (
      <div className='background'>
        <div className='container'>
          <div className='content-container'>
            <Header />
            <div className='calendar-container'>
              <Calendar date={date} onChangeDate={this.handleChangeDate} />
              <div>
                <span style={{color:'#8aab8c', fontWeight: '600'}}>Upcoming</span>
                <PlantList />
              </div>
              
            </div>
          </div>
          <SelectPlantForm 
            plants={plants}
            date={date}
            wateredList={ calendar[calendarDate] ? calendar[calendarDate] : [] }
            onSubmit={this.handleWaterPlant}
          />
        </div> 
      </div>
    );
  }
}

export default Plantendar;
