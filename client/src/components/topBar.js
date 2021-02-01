import React from 'react';
import '../style/components/topBar/topbar.scss'

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className='topBar-container'>
        <a href='#'>Upload Proof</a>
        <a href='#'>Activate</a>
        <input placeholder='Search...                         🔍'/>
        <a href='#'> 🌐 ESPANOL</a>
      </div>
    </div>
  )
}

export default TopBar;
