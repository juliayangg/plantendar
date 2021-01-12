import React, { useState } from 'react';
import classNames from 'classnames';
import stylesheet from './Notification.scss'
import Plant from './Plant'; 

export default function Notification( {isCompleteTask}) {

  const taskButtonStyles = classNames({
    'task-button': true,
    'complete-task': isCompleteTask
  })

  return (

    <div className='notification'> 
      <div className='task-details'>
        <div className='task-date'>
          Today, 12:00pm
        </div>
        <div className='task-name'> 
          Water Pepperoni
      </div>
    </div>
      <div className={taskButtonStyles}>
        Complete Task
      </div>
    </div>


  );
}