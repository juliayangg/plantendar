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
      lastWaterDate: {}, //potentially use this to store ALL the last times the plant was watered?
      // todo: lastFertilizerDate? 
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

  // this modifies 'calendar[date]' to add plant 
  // and updates plantWaterDate[plant] with the current date
  handleWaterPlant = (plantInput) => {
    const date = getShortedDate(this.state.date);
    const plant = plantInput.value;

    this.setState((prevState) => {
      const updatedCalendar = prevState.calendar; 
      if (updatedCalendar[date]?.includes(plant)) { // why does this get called twice?
        return;
      }

      if (updatedCalendar[date]){
        updatedCalendar[date] = updatedCalendar[date].concat(plant);
      } else {
        updatedCalendar[date] = [plant]
      }

      const lastWaterDate = prevState.lastWaterDate; 
      lastWaterDate[plant] = date; 
      
      return ({
        calendar: updatedCalendar,
        lastWaterDate: lastWaterDate,
      })
    })
  }

  render() {
    const { plants, date, lastWaterDate, calendar } = this.state; 
    const calendarDate = getShortedDate(date);

    return (
      <div className='background'>
        <div className='container'>
          <div className='content-container'>
            <Header />
            <div className='calendar-container'>
              <Calendar 
                date={date} 
                onChangeDate={this.handleChangeDate} 
              />
              <div>
                <span style={{color:'#799c7b', fontWeight: '600'}}>Upcoming</span>
                <PlantList />
              </div>
            </div>
          </div>
          <SelectPlantForm 
            plants={plants}
            lastWaterDate={lastWaterDate}
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
