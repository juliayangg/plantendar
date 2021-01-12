import React, { useState } from 'react';
import Notification from './components/Notification';

// import stylesheet from './PlantList.scss'
// import Plant from './Plant'; 

export default function NotificationList() {
  return (
    <>
        <div>test if this will show up</div>
        <Notification
            isCompleteTask={true} 

        />
        <Notification/>
    </>




  );
}