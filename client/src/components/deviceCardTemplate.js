import React from 'react';
import FirstImage from '../assets/images/byop.png';

const DeviceCardTemplate = () => {
  return (
      <div className='deviceCard-container'>
      <div className='deviceCard-imgContainer'>
        <img src={FirstImage} alt='Device'/>
      </div>
      <div className='deviceCard-top'>
        <p>QLink</p>
        <h3>Bring Your Own Phone</h3>
      </div>
      <div className='deviceCard-bottom'>
        <p>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
      </div>
    </div>
    )
};

export default DeviceCardTemplate;
