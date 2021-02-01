import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/deviceCard/deviceCards.scss';
import DeviceTemplate from './deviceCardTemplate';
import galaxy6 from '../assets/images/galaxy_a6.png';
import galaxy10 from '../assets/images/galaxy_A10e.png';
import iphoneXS from '../assets/images/iphone_xs_max.png';
import poblano from '../assets/images/poblano_vle5.png';
import quest5 from '../assets/images/quest5.png';


const DeviceCard = ({index, device}) => {
  let brands = ['HP', 'ZTE', 'SAMSUNG', 'APPLE'];
  let deviceBrand = brands.filter(brand => device.Description.toUpperCase().includes(brand));
  let deviceImages = [galaxy6, galaxy10, iphoneXS, poblano, quest5];

  return (
  <>
    {(index === 0) ? <DeviceTemplate /> :''}
    <div className='deviceCard-container'>
      <div className='deviceCard-imgContainer'>
        <img src={deviceImages[index]} alt='Device'/>
      </div>
      <div className='deviceCard-top'>
        <p>{deviceBrand[0] ? deviceBrand[0]: 'QLink'}</p>
        <h3>{device.Name}</h3>
      </div>
      <div className='deviceCard-bottom'>
        <div className='deviceCard_bottom-btns'>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className='deviceCard_bottom-priceInfo'>
          <div className='deviceCard_bottom-price'>
            <h3>${device.Price}</h3>
          </div>
          <div className='deviceCard_bottom-payments'>
            <h3>${(device.Price / 24).toFixed(2)}/<span>mo.</span></h3>
            <p>For 24 mos.</p>
          </div>
        </div>
      </div>
      <Link to={'/details/' + device.ProductId}><button className='btnStyle btnStyle-light' >View Details</button></Link>
    </div>
  </>
  )
}

export default DeviceCard;
