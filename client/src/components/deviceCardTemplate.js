import React, { useState } from 'react';
import FirstImage from '../assets/images/byop.png';

const DeviceCardTemplate = () => {
  const [visiblePopup, setVisiblePopup] = useState('none');

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
        <p>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero.</p>
      </div>
      <button className='btnStyle btnStyle-dark' onClick={()=>{
        setVisiblePopup(visiblePopup === 'none' ? 'unset' : 'none')
      }}>Bring Your Own Phone</button>
      <div class="deviceDetailSummary" style={{display: visiblePopup}}>
        <p>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero.</p>
      </div>
    </div>
    )
};

export default DeviceCardTemplate;
