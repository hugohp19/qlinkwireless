import React, { useState } from 'react';
import '../style/components/navBar/navBar.scss';
import QLinkWirelessLogo from '../assets/images/Image5.png';

const NavBar = () => {
  const [ status, setStatus ] = useState('close');
  
  return (
    <div className='nav'>
      <div className="logo">
        <img src={QLinkWirelessLogo} alt='Q Link Wireless Logo'/>
      </div>
      
      <div role='button' className='burguer' onClick={() => setStatus(status==='open' ? 'close' : 'open')}>
        <div className={status}/>
        <div className={status}/>
        <div className={status}/>
      </div>

      <ul className={status}>
        <li>Your Q Link<i className='arrow' /></li>
        <li>Activity<i className='arrow' /></li>
        <li>Shop<i className='arrow' /></li>
        <li>Help Center<i className='arrow' /></li>
        <li>Log in</li>
      </ul>
    </div>
  )
}

export default NavBar;
