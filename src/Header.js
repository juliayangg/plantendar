import React, { useState } from 'react';
import './Header.scss'

export default function Header() {
  return (
    <div className='welcome'>
      Hi Julia! Welcome to <span style={{color:'#8aab8c', fontWeight: '600'}}>Plantendar</span>, 
      the habit tracking calendar for your plants.
    </div>
  );
}